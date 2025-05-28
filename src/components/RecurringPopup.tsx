import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const IMAGE_URL = 'https://phantom-elmundo.unidadeditorial.es/c9cdf7a3427f5cc38d67e783c77f38bd/resize/414/f/jpg/assets/multimedia/imagenes/2019/02/12/15499756765918.jpg';
const INTERVAL_MS = 20_000;

const RecurringPopup: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const remainingRef = useRef<number>(INTERVAL_MS / 1000);
  const timerRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  // Schedule next appearance
  const scheduleNext = () => {
    timerRef.current = window.setTimeout(() => {
      setVisible(true);
    }, INTERVAL_MS);

    // reset and start countdown interval for logging
    remainingRef.current = INTERVAL_MS / 1000;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(() => {
      remainingRef.current -= 1;
      console.log(`[Popup] Oculto. Volverá a aparecer en ${remainingRef.current}s`);
    }, 1000);
  };

  // When popup is closed, start timer
  useEffect(() => {
    if (!visible) {
      scheduleNext();
    } else if (timerRef.current) {
      // If popup opened manually, clear any pending timer to avoid duplicate
      clearTimeout(timerRef.current);
      timerRef.current = null;
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      console.log('[Popup] Visible');
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [visible]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-60 flex items-center justify-center p-4" onClick={() => setVisible(false)}>
      <div className="bg-white rounded-lg shadow-xl max-w-sm w-full relative" onClick={e => e.stopPropagation()}>
        <button
          aria-label="Cerrar"
          onClick={() => setVisible(false)}
          className="absolute top-2 right-2 p-1 text-stone-500 hover:text-stone-800"
        >
          <X size={20} />
        </button>
        <img src={IMAGE_URL} alt="Foto divertida" className="w-full h-auto rounded-t-lg" />
        <div className="p-4">
          <p className="text-center font-serif">
            No le des muchas vueltas, este año te saldrá <span className="font-bold text-red-600">A PAGAR</span> como siempre
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecurringPopup; 