import AttractionPage from '@/app/components/AttractionPage';
import { southAttractions } from '@/app/data/south-attractions';

export async function generateStaticParams() {
  const params = [];
  for (const [dest, destData] of Object.entries(southAttractions)) {
    for (const slug of Object.keys(destData.attractions)) {
      params.push({ dest, slug });
    }
  }
  return params;
}

export default async function Page({ params }) {
  const { dest, slug } = await params;
  const destData = southAttractions[dest];
  if (!destData) return null;
  const attraction = destData.attractions[slug];
  if (!attraction) return null;

  const data = {
    ...attraction,
    regionName: destData.regionName,
    regionHref: destData.regionHref,
    destName: destData.destName,
    destHref: destData.destHref,
  };

  return <AttractionPage data={data} />;
}
