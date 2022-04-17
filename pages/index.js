import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import { searchQueryAtom } from '../atoms/searchAtom';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilValue,
  useRecoilState,
} from 'recoil';

export default function Home() {

  const searchQuery = useRecoilValue(searchQueryAtom);

  return (
    <RecoilRoot>
        <Header />
        <Searchbar />
    </RecoilRoot>
  );
}
