export const getUniqueKey = (data, key) => {
  const arr = [];

  data.forEach((x) => {
    if (!arr.includes(x[key])) {
      arr.push(x[key]);
    }
  });

  return arr;
};

export const getCallerFromOrganization = (data, key, organization) => {
  const arr = [];

  data.forEach((x) => {
    if (x.organizationId === organization) {
      if (!arr.includes(x[key])) {
        arr.push(x[key]);
      }
    }
  });

  return arr;
};

export const paginateData = (data, pageNumber, itemsPerPage) => {
  const start = ((pageNumber - 1) * itemsPerPage);
  const end = start + itemsPerPage;
  const result = {
    data: [],
    end: false,
  };
  let loopCount = 0;
  for (loopCount = start; loopCount < end; loopCount += 1) {
    if (data[loopCount]) {
      result.data.push(data[loopCount]);
    }
  }
  if (loopCount === data.length) {
    result.end = true;
  }

  return result;
};
