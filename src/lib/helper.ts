/* eslint-disable  @typescript-eslint/no-explicit-any */
export const truncateString = (
  str: string,
  n: number
) => {
  if (str && str.length > n) {
    return str.substring(0, n) + '...';
  } else {
    return str;
  }
};

export const shortenCompanyName = (
  companyName: string,
  useEllipsis = false
): string => {
  const MAX_LENGTH_FIRST_NAME = 20;
  const MAX_LENGTH_OTHER_NAMES = 10;

  const names = companyName.split(' ');
  const firstName = names[0];
  const otherNames = names.slice(1);

  if (firstName.length > MAX_LENGTH_FIRST_NAME) {
    return useEllipsis
      ? firstName.substring(0, MAX_LENGTH_FIRST_NAME) +
          '...'
      : firstName.substring(0, MAX_LENGTH_FIRST_NAME);
  }

  const totalOtherLength = otherNames.reduce(
    (acc, name) => acc + name.length,
    0
  );

  if (
    firstName.length + totalOtherLength <=
    MAX_LENGTH_OTHER_NAMES
  ) {
    return useEllipsis ? companyName : names.join(' ');
  }

  let truncatedOtherNames = '';
  for (const name of otherNames) {
    if (
      truncatedOtherNames.length + name.length <=
      MAX_LENGTH_OTHER_NAMES
    ) {
      truncatedOtherNames += name + ' ';
    } else {
      break;
    }
  }

  if (useEllipsis) {
    return (
      firstName + ' ' + truncatedOtherNames.trim() + '...'
    );
  } else {
    return firstName + ' ' + truncatedOtherNames.trim();
  }
};
export const minDOB = (age = 18) => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const maxDate = date;
  maxDate.setFullYear(currentYear - age);
  return maxDate;
};

export const covertToInteger = (
  keywords: string[],
  formData: any
) => {
  for (const key of keywords) {
    if (
      Object.prototype.hasOwnProperty.call(formData, key)
    ) {
      formData[key] = parseInt(formData[key], 10); // Convert the value to an integer
    }
  }
};

export const capitalizeEachWord = (input: any) => {
  let castedInput = String(input)
  // Ensure the input is a string and not null/undefined
  if (typeof castedInput !== 'string' || !castedInput) {
    throw new TypeError('Input must be a valid string');
  }

  // Trim whitespace from the beginning and end of the string
  castedInput = castedInput.trim();

  // If input is an empty string after trimming, return the input
  if (castedInput.length === 0) {
    return castedInput;
  }

  // Split the string into words, capitalize the first letter of each word, and join them back together
  return castedInput
    .split(' ')
    .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};


export function escapeBackslashes(inputString: any) {
  const castedInput = String(inputString)
  return castedInput.replace(/\\/g, '');
}
