const SUPABASE_URL = 'https://yjkeuumbgetioslvfkgm.supabase.co';

const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_f49qoTQR0pNiRkudA6RsXA_L0LS_7cI';

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);


// REGISTRO DE VISITA


async function registrarVisita() {
    const dispositivo = navigator.userAgent;
    const pagina = window.location.pathname;

    const referrer = document.referrer
        ? new URL(document.referrer).hostname
        : null;

    const parametros = new URLSearchParams(window.location.search);

    const utmSource = parametros.get('utm_source');
    const utmMedium = parametros.get('utm_medium');
    const utmCampaign = parametros.get('utm_campaign');

    const ambiente = ['localhost', '127.0.0.1'].includes(
        window.location.hostname
    ) ? 'local' : 'publicado';

    let visitanteId = localStorage.getItem('visitante_id');

    if (!visitanteId) {
        visitanteId = crypto.randomUUID();
        localStorage.setItem('visitante_id', visitanteId);
    }

    const { error } = await supabaseClient.rpc('registrar_visita_v3', {
        p_pagina: pagina,
        p_visitante_id: visitanteId,
        p_dispositivo: dispositivo,
        p_referrer: referrer,
        p_utm_source: utmSource,
        p_utm_medium: utmMedium,
        p_utm_campaign: utmCampaign,
        p_ambiente: ambiente
    });

    if (error) console.error('Erro ao registrar visita:', error);
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