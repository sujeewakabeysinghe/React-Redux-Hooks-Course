import './App.css';
import Person from './Three/Person';
import PersonClass from './Three/PersonClass';
import PersonHooks from './Three/PersonHooks';
import Four from './Four/Four';
import FourAnotherConditionalMeth from './Four/FourAnotherConditionalMeth';
import List from './Four/List';
import DynamicStyle from './Five/DynamicStyles';
import MediaQueries from './Five/MediaQueries';
import Radium, { StyleRoot } from 'radium';
import LifeCycleHooks from './Seven/LifeCycleHooks';
import UseEffect from './Seven/UseEffect';

function App() {
  return (
      <div className="App">
        <UseEffect/>
      </div>
  );
}

export default App;

/*
<Person person = 'a person' name = 'Sujeewa'/>
<Person person = 'an alian' name = 'Akiba'>I'm visiting everywhere.</Person>
<PersonClass/>
<PersonHooks/>
<Four/>
<FourAnotherConditionalMeth/>
<List/>
<DynamicStyle/>
<MediaQueries/>
<LifeCycleHooks name = 'Sujeewa'/>
*/