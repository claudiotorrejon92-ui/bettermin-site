import React, { useState, useEffect } from 'react';
import { Cpu, Factory, Leaf, Droplets, Zap, Users, ShieldCheck, ArrowRight, Menu, X, Linkedin } from 'lucide-react';
//import Chart from 'chart.js/auto';

const InteractiveFlowchart = () => {
    return (
        <div className="p-8 border-2 border-dashed border-stone-300 rounded-2xl text-center">
            <h4 className="text-xl font-semibold text-stone-800 mb-2">Modelo Spoke–Hub</h4>
            <p className="text-stone-500 max-w-3xl mx-auto">
                Nuestro modelo combina módulos de preconcentración en seco (Spokes) y un centro biotecnológico (Hub) para reprocesar relaves y concentrados de forma eficiente.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6 text-left">
                <div>
                    <h5 className="font-semibold text-green-600 mb-2">Spokes</h5>
                    <p className="text-stone-600">
                        Plantas modulares de preconcentración en seco que reducen el volumen y enriquecen el mineral sin consumir agua.
                    </p>
                </div>
                <div>
                    <h5 className="font-semibold text-green-600 mb-2">Hub</h5>
                    <p className="text-stone-600">
                        Centro biotecnológico de bio-oxidación y biolixiviación donde bacterias extremófilas liberan metales valiosos y estabilizan contaminantes.
                    </p>
                </div>
                <div>
                    <h5 className="font-semibold text-green-600 mb-2">Eco‑Pilot</h5>
                    <p className="text-stone-600">
                        Plataforma de inteligencia artificial que integra datos geoquímicos, mineralógicos y operacionales para optimizar cada etapa y generar pasaportes digitales.
                    </p>
                </div>
            </div>
        </div>
    );
};

const SystemArchitecture = () => {
    const [openLayer, setOpenLayer] = useState(null);

    const toggleLayer = (layerId) => {
        setOpenLayer(openLayer === layerId ? null : layerId);
    };

    const Layer = ({ id, icon, title, subtitle, color, children }) => {
        const isOpen = openLayer === id;
        const colorClasses = {
            purple: 'text-purple-800',
            sky: 'text-sky-800',
            teal: 'text-teal-800',
            amber: 'text-amber-800',
        };

        return (
            <div className="bg-white border border-stone-200 rounded-lg shadow-sm">
                <div
                    className="p-5 md:p-6 cursor-pointer flex justify-between items-center bg-stone-100 rounded-t-lg"
                    onClick={() => toggleLayer(id)}
                >
                    <div className="flex items-center space-x-4">
                        <span className="text-3xl">{icon}</span>
                        <div>
                            <h2 className={`text-xl md:text-2xl font-bold ${colorClasses[color]}`}>{title}</h2>
                            <p className="text-sm text-stone-600">{subtitle}</p>
                        </div>
                    </div>
                    <span className={`transform transition-transform duration-300 text-2xl ${colorClasses[color]} font-bold ${isOpen ? 'rotate-90' : ''}`}>
                        &#x276F;
                    </span>
                </div>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
                    <div className="p-6 border-t border-stone-200">
                        {children}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="container mx-auto px-4 py-8 md:py-12">
            <header className="text-center mb-10 md:mb-16">
                <h1 className="text-3xl md:text-5xl font-bold text-stone-900 mb-2">Arquitectura Digital Aplicada</h1>
                <p className="text-lg md:text-xl text-stone-600">"</p>
                <div className="w-24 h-1 bg-green-600 mx-auto mt-4"></div>
                <p className="max-w-3xl mx-auto mt-6 text-stone-700">
                    Esta es una exploración interactiva de la arquitectura tecnológica de 4 capas para el proyecto. Cada capa se basa en la anterior, desde la infraestructura física hasta el cerebro digital que optimiza toda la operación. Haga clic en cada capa para revelar sus componentes y propósito.
                </p>
            </header>

            <main className="max-w-4xl mx-auto space-y-4">
                <Layer id="layer-4" icon="🧐" title="Capa 4: El Cerebro Digital Unificado" subtitle="Inteligencia y Optimización" color="purple">
                    <p className="mb-4 text-stone-700">
                        Esta es la capa de software superior, desarrollada por nuestro equipo, que se asienta sobre toda la infraestructura para tomar decisiones inteligentes y optimizar la operación global.
                    </p>
                    <h3 className="font-semibold text-lg text-stone-800 mb-3">Componentes Clave:</h3>
                    <ul className="list-disc list-inside space-y-3 text-stone-600">
                        <li><span className="font-semibold text-purple-700">Módulo de caracterización de relaves:</span> Procesa las entradas de leyes de metales, contaminantes críticos, granulometría, mineralogía y condiciones operacionales históricas para generar el pasaporte digital de cada lote, indicadores de aptitud, predicciones de recuperación y alertas de riesgos.</li>
                        <li><span className="font-semibold text-purple-700">Módulo de caracterización avanzada / laboratorio biotecnológico:</span> Integra los resultados de pruebas biológicas, mediciones de actividad bacteriana y parámetros operacionales (pH, potencial redox, nutrientes, temperatura) para entregar curvas cinéticas, eficiencias, predicciones de recuperación y recomendaciones bio-operativas.</li>
                        <li><span className="font-semibold text-purple-700">Plataforma de Datos Unificada:</span> Orquesta la ingesta, gobernanza y modelación de datos de todos los módulos, asegurando trazabilidad y alimentando los motores de optimización de la capa.</li>
                    </ul>
                </Layer>

                <Layer id="layer-3" icon="💸" title="Capa 3: La Médula Espinal" subtitle="Supervisión Central" color="sky">
                    <p className="mb-4 text-slate-700">
                        Actúa como el sistema nervioso central, permitiendo a los operadores monitorear y controlar toda la operación desde una sala única. Es la principal fuente de datos para el Cerebro Digital.
                    </p>
                    <h3 className="font-semibold text-lg text-slate-800 mb-3">Componentes:</h3>
                    <ul className="list-disc list-inside space-y-3 text-slate-600">
                        <li><span className="font-semibold text-sky-700">Sistema SCADA Central:</span> La interfaz de supervisión y control que unifica la visualización de todos los procesos de la planta.</li>
                        <li><span className="font-semibold text-sky-700">Historiador de Procesos:</span> Una base de datos de series temporales que almacena de forma segura y eficiente todos los datos recopilados de los PLCs de la Capa 2, creando un registro histórico vital para el análisis y la optimización.</li>
                    </ul>
                </Layer>

                <Layer id="layer-2" icon="💻" title="Capa 2: Sistema Nervioso Periférico" subtitle="Control Local" color="teal">
                    <p className="mb-4 text-slate-700">
                        . Su función es la operación segura y autónoma básica de cada componente individual, como los reflejos del cuerpo.
                    </p>
                    <h3 className="font-semibold text-lg text-slate-800 mb-3">Componentes:</h3>
                    <ul className="list-disc list-inside space-y-3 text-slate-600">
                        <li><span className="font-semibold text-teal-700">PLCs (Controladores Lógicos Programables):</span> El cerebro individual de cada equipo (ej. PLC del Knelson™ GX, PLC del filtro AFP IV™, PLC de la isla de bio-oxidación).</li>
                        <li><span className="font-semibold text-teal-700">HMIs (Interfaces Humano-Máquina):</span> Las pantallas locales que permiten a los operadores interactuar directamente con un equipo específico para mantenimiento o control localizado.</li>
                    </ul>
                </Layer>

                <Layer id="layer-1" icon="👁️" title="Capa 1: Los Sentidos" subtitle="Infraestructura Física y de Sensado" color="amber">
                    <p className="mb-4 text-slate-700">
                        La base de toda la arquitectura. Corresponde a los activos físicos y la instrumentación avanzada que permite al Cerebro Digital "ver" y "sentir" el proceso en tiempo real.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold text-lg text-slate-800 mb-3">Componentes Físicos:</h3>
                            <ul className="list-disc list-inside space-y-2 text-slate-600">
                                <li><span className="font-semibold">Pre-concentracion:</span> Módulos de Preparación, Deslamado, Concentración Primaria, Ultra-Concentración, y Deshidratación.</li>
                                <li><span className="font-semibold">Biotecnológico:</span> Islas de Bio-oxidación y Lixiviación, junto con áreas de soporte.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-slate-800 mb-3">Instrumentación Clave a Integrar:</h3>
                            <ul className="list-disc list-inside space-y-2 text-slate-600">
                                <li>Sensores de densidad, flujo y presión.</li>
                                <li>Analizadores de tamaño de partícula y ley en línea.</li>
                                <li>Sondas (pH, ORP, OD) y analizadores de gases (OUR/CER).</li>
                                <li>Cámaras de visión artificial.</li>
                            </ul>
                        </div>
                    </div>
                </Layer>
            </main>
        </div>
    );
};

const Section = ({ children, className = '' }) => (
    <section className={`py-12 md:py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
        {children}
    </section>
);

const Title = ({ children, as = 'h2', className = '' }) => {
    const Tag = as;
    return (
        <Tag className={`text-3xl md:text-4xl font-bold text-center text-stone-800 mb-12 ${className}`}>
            {children}
        </Tag>
    );
};

const Card = ({ icon, title, text, link, onNavigate }) => (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg hover:shadow-green-500/10 transform hover:-translate-y-2 transition-all duration-300 h-full flex flex-col border border-stone-200">
        <div className="flex-shrink-0">{icon}</div>
        <h3 className="text-2xl font-bold text-stone-900 mt-4 mb-2">{title}</h3>
        <p className="text-stone-600 mb-6 flex-grow">{text}</p>
        <button onClick={() => onNavigate(link)} className="text-green-600 font-semibold hover:text-green-500 transition-colors duration-300 flex items-center self-start">
            Saber más <ArrowRight className="ml-2 h-5 w-5" />
        </button>
    </div>
);

const HomePage = ({ onNavigate }) => {
    return (
        <div className="animate-fadeIn">
            <div className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                <video autoPlay loop muted playsInline className="absolute z-0 w-auto min-w-full min-h-full max-w-none" poster="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop">
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-top-down-view-of-a-stream-running-through-the-woods-44253-large.mp4" type="video/mp4" />
                </video>
                <div className="relative z-20 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-4" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.7)' }}>
                        Bettermin: Transformamos relaves en valor. <span className="text-green-400">Juntos creamos un futuro sostenible.</span>
                    </h1>
                    <p className="max-w-4xl mx-auto text-lg md:text-xl text-stone-100 mb-8" style={{ textShadow: '0 2px 5px rgba(0,0,0,0.7)' }}>
                        Bettermin es una startup científica y tecnológica chilena dedicada a transformar un problema ambiental crítico en una oportunidad productiva. Utilizamos biotecnología avanzada y nuestro Eco-Pilot, una plataforma de inteligencia artificial, para reprocesar relaves mineros de manera eficiente y responsable.
                    </p>
                    <button onClick={() => onNavigate('tecnologia')} className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-600/30">
                        Descubra la Minería 4.0
                    </button>
                </div>
            </div>
            <Section className="bg-stone-50">
                <Title>Un Ecosistema Integrado de Innovación</Title>
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                    <Card icon={<Factory className="h-12 w-12 text-green-600" />} title="Procesos" text="Modelo Spoke–Hub: Preconcentración en seco y bio-oxidación para transformar relaves en metales valiosos." link="procesos" onNavigate={onNavigate} />
                    <Card icon={<Cpu className="h-12 w-12 text-green-600" />} title="Tecnología" text="Eco-Pilot: Plataforma de inteligencia artificial que integra datos y optimiza cada etapa del proceso." link="tecnologia" onNavigate={onNavigate} />
                    <Card icon={<Leaf className="h-12 w-12 text-green-600" />} title="Sostenibilidad" text="Remediación y economía circular: reducimos pasivos ambientales y creamos valor de forma responsable." link="sostenibilidad" onNavigate={onNavigate} />
                </div>
            </Section>
        </div>
    );
};

const ProcesosPage = () => {
    return (
        <div className="animate-fadeIn">
            <Section className="bg-stone-50 pt-28 md:pt-32">
                <InteractiveFlowchart />
            </Section>
        </div>
    );
};

const TecnologiaPage = () => {
    return (
        <div className="animate-fadeIn">
            <Section className="bg-stone-50 pt-28 md:pt-32">
                <SystemArchitecture />
            </Section>
        </div>
    );
};

const SostenibilidadPage = () => {
    const EsgPillar = ({ icon, title, children }) => (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
            <div className="flex items-center mb-4">
                {icon}
                <h3 className="text-2xl font-bold text-stone-900 ml-4">{title}</h3>
            </div>
            <div className="text-stone-600 space-y-4 leading-relaxed">{children}</div>
        </div>
    );

    return (
        <div className="animate-fadeIn">
            <Section className="bg-stone-50 pt-28 md:pt-32">
                <Title as="h1">Minería que Restaura y Conserva</Title>
                <p className="text-center text-stone-600 max-w-3xl mx-auto mb-16 text-lg">
                    Nuestro modelo de negocio es inherentemente sostenible: transformamos pasivos ambientales en valor. Nuestro compromiso es total con el impacto ambiental, social y económico.
                </p>
                <div className="max-w-5xl mx-auto grid md:grid-cols-1 gap-8">
                    <EsgPillar icon={<Droplets className="h-10 w-12 text-green-600" />} title="Remediación Activa (Ambiental)">
                        <p>Reducimos los pasivos ambientales y estabilizamos contaminantes como arsénico mediante procesos biotecnológicos y de preconcentración.</p>
                    </EsgPillar>
                    <EsgPillar icon={<Zap className="h-10 w-12 text-green-600" />} title="Economía Circular (Económico)">
                        <p>Transformamos desechos en valor, recuperando oro, plata, cobre, cobalto, niquel y tierras raras. creando un ciclo productivo sostenible.</p>
                    </EsgPillar>
                    <EsgPillar icon={<Users className="h-10 w-12 text-green-600" />} title="Uso Responsable de Recursos (Ambiental)">
                        <p>Utilizamos procesos sin uso de agua en la preconcentración y optimizamos el consumo energético mediante inteligencia artificial.</p>
                    </EsgPillar>
                    <EsgPillar icon={<ShieldCheck className="h-10 w-12 text-green-600" />} title="Visión de Futuro (Social y Gobernanza)">
                        <p>Nuestra visión es convertir a Chile en un referente mundial de minería verde, implementando un modelo replicable y transparente que combine ciencia, tecnología y sostenibilidad.</p>
                    </EsgPillar>
                </div>
            </Section>
        </div>
    );
};

export default function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigate = (page) => {
        setCurrentPage(page);
        setIsMenuOpen(false);
        window.scrollTo(0, 0);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage onNavigate={handleNavigate} />;
            case 'procesos':
                return <ProcesosPage />;
            case 'tecnologia':
                return <TecnologiaPage />;
            case 'sostenibilidad':
                return <SostenibilidadPage />;
            default:
                return <HomePage onNavigate={handleNavigate} />;
        }
    };

    const navLinks = [
        { id: 'home', label: 'Inicio' },
        { id: 'procesos', label: 'Procesos' },
        { id: 'tecnologia', label: 'Tecnología' },
        { id: 'sostenibilidad', label: 'Sostenibilidad' },
    ];

    return (
        <div className="bg-stone-50 min-h-screen font-sans text-stone-800">
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex-shrink-0">
                            <button onClick={() => handleNavigate('home')} className={`text-2xl font-bold tracking-wider transition-colors ${isScrolled ? 'text-stone-800' : 'text-white'}`}>
                                BETTERMIN
                            </button>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navLinks.map((link) => (
                                    <button
                                        key={link.id}
                                        onClick={() => handleNavigate(link.id)}
                                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                                            currentPage === link.id
                                                ? 'bg-green-600 text-white'
                                                : `hover:bg-stone-100 ${isScrolled ? 'text-stone-700' : 'text-stone-100 hover:text-stone-900'}`
                                        }`}
                                    >
                                        {link.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`transition-colors ${isScrolled ? 'text-stone-700' : 'text-stone-100'}`}>
                                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </nav>
                {isMenuOpen && (
                    <div className="md:hidden bg-white">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => handleNavigate(link.id)}
                                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                                        currentPage === link.id ? 'bg-green-600 text-white' : 'text-stone-700 hover:bg-stone-100'
                                    }`}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </header>

            <main>{renderPage()}</main>

            <footer className="bg-stone-100 border-t border-stone-200">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-stone-800 text-2xl font-bold tracking-wider mb-4">BETTERMIN</p>
                    <div className="flex justify-center space-x-6 mb-8">
                        <button onClick={() => handleNavigate('home')} className="text-stone-600 hover:text-green-600">Inicio</button>
                        <button onClick={() => handleNavigate('procesos')} className="text-stone-600 hover:text-green-600">Procesos</button>
                        <button onClick={() => handleNavigate('tecnologia')} className="text-stone-600 hover:text-green-600">Tecnología</button>
                        <button onClick={() => handleNavigate('sostenibilidad')} className="text-stone-600 hover:text-green-600">Sostenibilidad</button>
                        <a
                            href="https://www.linkedin.com/company/bettermin-chile"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="text-stone-600 hover:text-green-600"
                        >
                            <Linkedin size={24} />
                        </a>
                    </div>
                    <p className="text-stone-500">&copy; {new Date().getFullYear()} Bettermin. Todos los derechos reservados.</p>
                    <p className="text-stone-400 text-sm mt-2">Transformando la minería para un futuro sostenible.</p>
                </div>
            </footer>
        </div>
    );
}
