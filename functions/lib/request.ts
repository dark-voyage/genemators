export default async function (link: RequestInfo): Promise<JSON> {
  return await fetch(link).then((res: Response) => {
    return res.json();
  });
}
