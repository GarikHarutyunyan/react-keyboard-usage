import React, { useCallback, useEffect, useState } from 'react';

export function useKeyboard(callback: (key: string) => void){

    const handleKeyPress = useCallback((event) => {
        callback(event.key);
    }, []);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);

        return () => {
           document.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);

    return handleKeyPress;
}