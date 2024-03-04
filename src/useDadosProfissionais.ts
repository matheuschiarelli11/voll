import IProfissional from "./types/IProfissional";
import useFetch from "./useFetch";

const useDadosProffisional = () => {
    return useFetch<IProfissional[]>({ url: 'profissionais' });
}

export default useDadosProffisional;