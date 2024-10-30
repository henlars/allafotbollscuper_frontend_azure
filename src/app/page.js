import Content from './components/Content';
export default async function Home() {
  let data = await fetch(
    'https://cupapi-becchgewhyfydfba.canadacentral-01.azurewebsites.net/api/cup/'
  );
  let allData = await data.json();

  return <Content data={allData}></Content>;
}
