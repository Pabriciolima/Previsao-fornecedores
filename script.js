const fornecedores = [
    { fornecedor: 'Cummins Filtros', tipo: 'NORMAL', prazo: '30 dias' },
    { fornecedor: 'Master', tipo: 'São Luís', prazo: '23 a 25 dias' },
    { fornecedor: 'Master', tipo: 'Teresina', prazo: '23 a 25 dias' },
    { fornecedor: 'Cummins U.P', tipo: 'São Luís - U.P.', prazo: '10 a 15 dias' },
    { fornecedor: 'Cummins', tipo: 'São Luís - Normal', prazo: '22 dias' },
    { fornecedor: 'Eaton', tipo: 'U.P.', prazo: '15 dias' },
    { fornecedor: 'Eaton', tipo: 'Normal', prazo: '20 dias' },
    { fornecedor: 'Fras-le', tipo: 'Normal', prazo: '20 dias' },
    { fornecedor: 'Pedido da Fábrica AEREO', tipo: 'Item que pode vir aéreo', prazo: '4 dias úteis - U.P.' },
    { fornecedor: 'Pedido da Fábrica NÃO AEREO', tipo: 'Item que NÃO pode vir aéreo', prazo: '10 a 12 dias úteis - U.P.' },
    { fornecedor: 'Pedido da Fábrica', tipo: 'Normal', prazo: '15 a 17 dias úteis' },
    { fornecedor: 'Meritor', tipo: 'Normal', prazo: '20 dias' }
];

const fornecedoresList = document.getElementById('fornecedoresList');
const detalhes = document.getElementById('detalhes');
const detalhesTexto = document.getElementById('detalhesTexto');
const fecharBtn = document.getElementById('fecharBtn');

// Cria os itens de fornecedores na parte superior
fornecedores.forEach(fornecedor => {
    const item = document.createElement('div');
    item.classList.add('fornecedor-item');
    item.textContent = fornecedor.fornecedor;
    
    item.addEventListener('click', () => {
        detalhesTexto.textContent = `Tipo de atendimento: ${fornecedor.tipo}\nPrazo para atender: ${fornecedor.prazo}`;
        detalhes.classList.add('show');
    });

    fornecedoresList.appendChild(item);
});

fecharBtn.addEventListener('click', () => {
    detalhes.classList.remove('show');
});
