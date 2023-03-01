import styles from './Filters.module.scss';
import { useFilters } from './useFilters';

export default function Filters() {
  const {
    languages,
    selectedLanguages,
    handleSelectLanguage,
    handleRemoveLanguage,
    totalCount,
    currentCount,
  } = useFilters();

  return (
    <header className={styles.root}>
      <div>
        Showing {currentCount} of {totalCount} repositories
      </div>
      <div className={styles.filters}>
        <aside>
          <select
            value="initial"
            onChange={(e) => {
              handleSelectLanguage(e.currentTarget.value);
            }}
          >
            <option value="initial">Filter by language</option>
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </aside>

        <aside className={styles.chips}>
          {selectedLanguages.map((l) => (
            <span key={l} className={styles.chip}>
              {l}
              <span role="button" onClick={() => handleRemoveLanguage(l)}>
                x
              </span>
            </span>
          ))}
        </aside>
      </div>
    </header>
  );
}
