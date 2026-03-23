

export const getTemperatureColor = (temp: number): string => {
    if (temp < 0) return '#031057'
    if (temp >= 1 && temp <= 15) return '#4a90e2'   
    if (temp >= 16 && temp <= 25) return '#f7770f'   
    return '#e74c3c'                   
}


