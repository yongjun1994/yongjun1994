import Basic from './Basic';
import Size from './Size';
import IconTest from './IconTest';
import { Icon } from '../../components';

export default function ButtonTest() {
  return (
    <section className="mt-4">
      <h2 className="font-bold text-5xl text-center">Basic</h2>
      <div className="mt-4">
        <IconTest />
        <Size />
        <Basic />
      </div>
    </section>
  );
}
