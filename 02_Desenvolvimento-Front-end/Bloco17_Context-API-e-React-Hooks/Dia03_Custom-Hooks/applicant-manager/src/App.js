import './App.css';
import PersonCard from './components/PersonCard';
import useFetch from './hooks/useFetch';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const { loading, error, data, refresh } = useFetch('https://randomuser.me/api/');

  const [approvals, setApprovals, clearApprovals] = useLocalStorage('approvals', []);
  const [rejections, setRejections, clearRejections] = useLocalStorage('rejections', []);

  if (error) return (
    <main>
      <h1>Um erro inesperado aconteceu</h1>
    </main>
  );

  return (
    <main>
      { loading && <h1>Carregando...</h1> }
      { data.length > 0 && (
        <section>
          <section>
            <h1>Pessoas Aleatórias</h1>
            <PersonCard person={ data[0] } />
            <button type='button' onClick={ refresh }>
              ⏩ Próxima pessoa candidata
            </button>
            <button type='button' onClick={ () => setApprovals([...approvals, data[0]])
            }>
              ✅ Aprovar
            </button>
            <button type='button' onClick={ () => setRejections([...rejections, data[0]])
            }>
              ❌ Reprovar
            </button>
          </section>
          <section>
            <h1>✅ Aprovadas</h1>
            <button type='button' onClick={ clearApprovals }>
              Limpar
            </button>
            { approvals.map((person) => (
              <PersonCard key={ person.id.name } person={ person } />
            )) }
          </section>
          <section>
            <h1>❌ Reprovadas</h1>
            <button type='button' onClick={ clearRejections }>
              Limpar
            </button>
            { rejections.map((person) => (
              <PersonCard key={ person.id.name } person={ person } />
            )) }
          </section>
        </section>
      ) }
    </main>
  );
}

export default App;
