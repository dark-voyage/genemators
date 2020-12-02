export default async function (link: RequestInfo): Promise<any> {
  return await fetch(link).then((res) => {
    return res.json();
  });
}
