import {
  camelCase,
  cloneDeep,
  isPlainObject,
  mapKeys,
  mapValues,
} from 'lodash';

export const useCaseConverter = () => {
  const convertSnakeToCamelCase = (data: object | any[]): object | any[] => {
    const convertSingleObject = (input: object): object => {
      const convertedObject = mapKeys(input, (_: any, key: string) =>
        camelCase(key)
      );

      return mapValues(convertedObject, (value: any) => {
        if (isPlainObject(value)) {
          return convertSingleObject(value);
        }
        return value;
      });
    };

    if (Array.isArray(data)) {
      return data.map((item) => convertSingleObject(item));
    }

    return convertSingleObject(cloneDeep(data));
  };

  return {
    convertSnakeToCamelCase,
  };
};
