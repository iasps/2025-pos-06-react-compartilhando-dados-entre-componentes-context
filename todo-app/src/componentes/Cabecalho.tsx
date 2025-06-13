const Titulo = () => (
	<h1 className="text-4xl font-bold mb-1 mt-15">React - Conceitos básicos</h1>
);

const SubTitulo = () => (
	<h2 className="text-2xl font-bold mb-15">Programação Orientada a Serviços (POS)</h2>
);

const Cabecalho = () => {
	return (
		<div className="text-center">
			<Titulo />
			<SubTitulo />
		</div>
	);
};

export default Cabecalho;
export { Titulo, SubTitulo };
