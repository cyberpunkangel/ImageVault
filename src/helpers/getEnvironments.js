import dotenv from 'dotenv';

dotenv.config();

// Acceder a import.meta.env fuera de la función
const env = import.meta.env;

export const getEnvironments = () => {
  return {
    ...env
  };
};
