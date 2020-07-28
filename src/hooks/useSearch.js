import React from 'react';
import core from 'core';
import isSearchResultSame from "helpers/isSearchResultSame";

function useSearch() {
  const [searchResults, setSearchResults] = React.useState([]);
  const [activeSearchResult, setActiveSearchResult] = React.useState();
  const [activeSearchResultIndex, setActiveSearchResultIndex] = React.useState(-1);
  const [searchStatus, setSearchStatus] = React.useState('SEARCH_NOT_INITIATED');

  React.useEffect(() => {
    function activeSearchResultChanged(newActiveSearchResult) {
      const searchResults = core.getPageSearchResults() || [];
      const newActiveSearchResultIndex = searchResults.findIndex(searchResult => {
        return isSearchResultSame(searchResult, newActiveSearchResult);
      });
      setActiveSearchResult(newActiveSearchResult);
      setActiveSearchResultIndex(newActiveSearchResultIndex);
    }

    function searchResultChanged(newSearchResults = []) {
      setSearchResults(newSearchResults);
      if (newSearchResults && newSearchResults.length === 0) {
        setActiveSearchResult(undefined);
        setActiveSearchResultIndex(-1);
      }
    }

    function searchInProgressEventHandler(isSearching, isFullSearch) {
      if (isSearching) {
        setSearchStatus('SEARCH_IN_PROGRESS');
      } else {
        setSearchStatus('SEARCH_DONE');
      }
    }
    core.addEventListener('activeSearchResultChanged', activeSearchResultChanged);
    core.addEventListener('searchResultChanged', searchResultChanged);
    core.addEventListener('searchInProgress', searchInProgressEventHandler);
    return function useSearchEffectCleanup() {
      core.removeEventListener('activeSearchResultChanged', activeSearchResultChanged);
      core.removeEventListener('searchResultChanged', searchResultChanged);
      core.removeEventListener('searchInProgress', searchInProgressEventHandler);
    };
  }, [setActiveSearchResult, setActiveSearchResultIndex, setSearchStatus]);

  return {
    searchStatus,
    searchResults,
    activeSearchResult,
    activeSearchResultIndex,
  };
}

export default useSearch;
