import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TOCItem {
  id: string;
  title: string;
  children?: TOCItem[];
}

interface TableOfContentsProps {
  items: TOCItem[];
  currentSection: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ items, currentSection }) => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  // Expand the section that contains the current item
  useEffect(() => {
    const newExpandedItems: Record<string, boolean> = {};
    
    const findAndExpandParent = (items: TOCItem[], currentId: string) => {
      for (const item of items) {
        if (item.id === currentId) {
          return true;
        }
        
        if (item.children) {
          const found = findAndExpandParent(item.children, currentId);
          if (found) {
            newExpandedItems[item.id] = true;
            return true;
          }
        }
      }
      return false;
    };
    
    findAndExpandParent(items, currentSection);
    setExpandedItems(newExpandedItems);
  }, [currentSection, items]);

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const renderItems = (items: TOCItem[], level = 0) => {
    return items.map(item => (
      <React.Fragment key={item.id}>
        <li className={`pl-${level * 4}`}>
          <div className="flex items-center justify-between">
            <Link 
              to={`/section/${item.id}`} 
              className={`py-2 hover:text-blue-700 transition-colors flex-grow ${
                currentSection === item.id ? 'text-blue-700 font-medium' : ''
              }`}
            >
              {item.title}
            </Link>
            {item.children && item.children.length > 0 && (
              <button 
                onClick={() => toggleExpand(item.id)}
                className="p-1 rounded-full hover:bg-stone-100"
              >
                {expandedItems[item.id] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
            )}
          </div>
        </li>
        {item.children && expandedItems[item.id] && (
          <li>
            <ul className="border-l border-stone-200 ml-2">
              {renderItems(item.children, level + 1)}
            </ul>
          </li>
        )}
      </React.Fragment>
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sticky top-24">
      <h3 className="text-lg font-serif font-bold mb-4">Tabla de Contenidos</h3>
      <ul className="space-y-1">
        {renderItems(items)}
      </ul>
    </div>
  );
};

export default TableOfContents;