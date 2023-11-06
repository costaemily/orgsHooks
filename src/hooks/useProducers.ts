import {useEffect, useState} from 'react';
import {loadProducers} from '../services/loadData';

export function useProducers() {
  //it is always set at the beginning of the function
  const [title, setTitle] = useState('');
  const [list, setList] = useState([]);

  /*
    it is used as the component did mount function with no values in the array
    executing a function passed as the first argument only when the component is created
   */
  useEffect(() => {
    const resp = loadProducers();
    setTitle(resp.title);
    setList(resp.list);
    //console.log(resp);
  }, []);

  /* useEffect(() => {
    const retorno = carregaProdutores();
    retorno.lista.sort(
      (produtor1, produtor2) => produtor1.distancia - produtor2.distancia,
    );
    setTitulo(retorno.titulo);
    setLista(retorno.lista);
  }, []); */

  return [title, list];
}
