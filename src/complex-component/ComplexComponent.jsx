import Aside from './Aside';
import './ComplexComponent.scss'
import Header from './Header';
import Section from './Section';

function ComplexComponent() {
  return (
    <div className='complex-component'>
      <Header />
      <div className='content-layout'>
        <Aside />
        <Section />
      </div>
    </div>
  );
}

export default ComplexComponent;