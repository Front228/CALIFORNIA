import { useEffect, useState } from 'react';
import './Loader.scss';

const Loader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        // Запускаем таймер на 3 секунды
        const timer = setTimeout(() => {
            setIsLoading(false); // Начинаем анимацию ухода вверх
        }, 2000);

        // Ждем окончания анимации CSS (примерно 0.8с), чтобы убрать блок из DOM
        const cleanupTimer = setTimeout(() => {
            setIsFinished(true);
        }, 3000);

        return () => {
            clearTimeout(timer);
            clearTimeout(cleanupTimer);
        };
    }, []);

    // Если загрузка завершена, не рендерим ничего (или opacity: 0)
    if (isFinished) return null;

    return (
        <div className={`loader-wrapper ${!isLoading ? 'active' : ''}`}>
            {/* Три части экрана (Шторки) */}
            <div className="loader-panel panel-left"></div>
            <div className="loader-panel panel-center"></div>
            <div className="loader-panel panel-right"></div>

            {/* Контент загрузки (Текст и полоска) */}
            <div className="loader-content">
                <h1 className="loader-text">Loading...</h1>
                <div className="loader-bar-container">
                    <div className="loader-bar"></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;