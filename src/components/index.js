/**
 *  Point of contact for component modules
 *
 *  ie: import { CounterButton, InfoBar } from 'components';
 *
 */

export CounterButton from './CounterButton/CounterButton';
export GithubButton from './GithubButton/GithubButton';
export InfoBar from './InfoBar/InfoBar';
export MiniInfoBar from './MiniInfoBar/MiniInfoBar';
export SurveyForm from './SurveyForm/SurveyForm';
export WidgetForm from './WidgetForm/WidgetForm';


// Container - Redux Connected Components
export { default as Destination }   from '../containers/Destination/Destination'

// Dumb content driven components
export { default as DesiredCare }   from './shared/content/DesiredCare';
export { default as ResultsTitle }  from './shared/content/ResultsTitle';
export { default as SeoBlock }      from './shared/content/SeoBlock';
export { default as InvocaHelper}   from './shared/content/InvocaHelper';
export { default as Logo}           from './shared/content/Logo';

// Layout Components
export { default as CareTypes }     from './shared/layout/CareTypes';
export { default as Footer}         from './shared/layout/Footer';
export { default as CommunityList } from './shared/layout/CommunityList';
export { default as Header}         from './shared/layout/Header';
export { default as Caretypes }     from './shared/layout/CareTypes'

// Form Related Components
export { default as LeadForm }      from './shared/forms/LeadForm';
export { default as SearchBar}      from './shared/forms/SearchBar';

// Interactive UI Controls
export { default as GlobalNav}      from './shared/controls/GlobalNav';

// Data Related Components
export { default as http}      from './shared/data/http';