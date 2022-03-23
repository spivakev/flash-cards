import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router-dom';
import { routes } from './App.const';
import { ErrorFallback } from './components/ErrorFallback/ErrorFallback';
import { Page } from './components/Page/Page';
import { Main } from './layouts/Main/Main';

export const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route
            index
            element={<Page>Default Page Content</Page>}
            key="defaultContent"
          />
          {routes.map(({ path, element }) => (
            <Route path={path} element={element} key={path} />
          ))}
        </Route>
      </Routes>
    </ErrorBoundary>
  );
};
