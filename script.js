const SUPABASE_URL = 'https://yjkeuumbgetioslvfkgm.supabase.co';

const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_f49qoTQR0pNiRkudA6RsXA_L0LS_7cI';

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);


// REGISTRO DE VISITA


async function registrarVisita() {
    const pagina = window.location.pathname;

    let visitanteId = localStorage.getItem('visitante_id');

    if (!visitanteId) {
        visitanteId = crypto.randomUUID();
        localStorage.setItem('visitante_id', visitanteId);
    }

    const { error } = await supabaseClient.rpc(
        'registrar_visita_v2',
        {
            p_pagina: pagina,
            p_visitante_id: visitanteId
        }
    );

    if (error) {
        console.error('Erro ao registrar visita:', error);
    }
}

registrarVisita();



// BOTÃO ENTRAR

const botaoEntrar = document.querySelector('.botao-entrar');

if (botaoEntrar) {
    botaoEntrar.addEventListener('click', function () {
        document.querySelector('#textos').scrollIntoView({
            behavior: 'smooth'
        });
    });
}