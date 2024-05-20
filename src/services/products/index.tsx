export const getData = async (url: string) => {
  const res = await fetch(url, {
    cache: "no-store",
    next: {
      tags: ["products"],
    },
  });

  if (!res.ok) {
    return {
      status: res.status,
      messsage: res.statusText,
    };
  }
  return res.json();
};
