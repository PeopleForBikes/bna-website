type NormalizedAjvError = { name: string, message: string };
type NormalizedAjvErrors = NormalizedAjvError[];

function normaliseAjvErrors(errors): NormalizedAjvErrors {
  return errors.reduce(function (acc, el) {
    const { instancePath, message } = el;
    if (instancePath.length && instancePath[0] === "/") {
      let path = instancePath.slice(1);

      if (Number.isInteger(parseInt(path, 10))) {
        path = `/${path}`;
      }

      acc.push({ name: path, message });
    } else {
      acc.push({ name: instancePath, message });
    }

    return acc;
  }, []);
}


export type { NormalizedAjvErrors };
export default normaliseAjvErrors;
