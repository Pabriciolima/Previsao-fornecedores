const fornecedores = [
    { fornecedor: 'Cummins Filtros', tipo: 'NORMAL', prazo: '30 dias' },
    { fornecedor: 'Master', tipo: 'U.P e normal', prazo: '23 a 25 dias' },
    { fornecedor: 'Cummins U.P', tipo: 'U.P.', prazo: '10 a 15 dias' },
    { fornecedor: 'Cummins', tipo: 'Normal', prazo: '22 dias' },
    { fornecedor: 'Eaton U.P', tipo: 'U.P.', prazo: '15 dias' },
    { fornecedor: 'Eaton', tipo: 'Normal', prazo: '20 dias' },
    { fornecedor: 'Fras-le', tipo: 'U.P e Normal', prazo: '20 dias' },
    { fornecedor: 'Pedido da Fábrica U.P AEREO', tipo: 'Item que pode vir aéreo', prazo: '4 a 5 dias úteis - U.P.' },
    { fornecedor: 'Pedido da Fábrica U.P NÃO AEREO', tipo: 'Item que NÃO pode vir aéreo', prazo: '10 a 12 dias úteis - U.P.' },
    { fornecedor: 'Pedido da Fábrica', tipo: 'Normal', prazo: '15 a 17 dias úteis' },
    { fornecedor: 'Meritor', tipo: 'Normal', prazo: '20 dias' }
];

const fornecedoresList = document.getElementById('fornecedoresList');
const detalhes = document.getElementById('detalhes');
const detalhesTexto = document.getElementById('detalhesTexto');
const fecharBtn = document.getElementById('fecharBtn');
const toggleModeBtn = document.getElementById('toggleModeBtn');
const modeIcon = document.getElementById('modeIcon');

// Cria os itens de fornecedores na parte superior
fornecedores.forEach(fornecedor => {
    const item = document.createElement('div');
    item.classList.add('fornecedor-item');
    item.textContent = fornecedor.fornecedor;
    
    item.addEventListener('click', () => {
        detalhesTexto.textContent = `Tipo de atendimento: ${fornecedor.tipo}\nPrazo para atender: ${fornecedor.prazo}`;
        detalhes.classList.add('show');
        
        // Faz o scroll até a seção de detalhes
        detalhes.scrollIntoView({ behavior: 'smooth' });
    });

    fornecedoresList.appendChild(item);
});

fecharBtn.addEventListener('click', () => {
    detalhes.classList.remove('show');
});

toggleModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    modeIcon.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
