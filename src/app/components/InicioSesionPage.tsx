import { useState } from 'react';
import svgPaths from "../../imports/svg-p6tgz2m91p";
import imgMesaDeTrabajo4A12 from "figma:asset/cae6f7c829fd5e18b3ab00859116c2b1a0bf4bbb.png";
import imgEmpathyMap1 from "figma:asset/5cd1df6f6e2903c443ffb765262235d7d2ddf655.png";

function Heading({ onBack }: { onBack: () => void }) {
  return (
    <div className="absolute contents left-0 top-[-35px]" data-name="Heading">
      <div className="absolute bg-[#27423f] h-[80px] left-0 top-0 w-[1440px]" />
      <div className="absolute left-[1365px] size-[58px] top-[11px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 58">
          <circle cx="29" cy="29" fill="var(--fill-0, #FCDA4C)" id="Ellipse 1" r="29" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[18px] leading-[normal] left-[1220px] not-italic text-[#a0aec0] text-[18px] top-[31px] w-[125px]">Iniciar sesión</p>
      <button onClick={onBack} className="absolute h-[102px] left-[46px] top-[-35px] w-[171px] cursor-pointer hover:opacity-90 transition-opacity" data-name="Mesa de trabajo 4a1 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[163.76%] left-0 max-w-none top-0 w-full" src={imgMesaDeTrabajo4A12} />
        </div>
      </button>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex h-full items-center pl-[8px] pr-[6px] relative shrink-0 w-[102px]">
      <p className="font-['Work_Sans:Light',sans-serif] font-light leading-[20px] relative shrink-0 text-[#27423f] text-[18px] whitespace-nowrap">Usuario</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0 w-full">
      <div className="flex flex-row items-center self-stretch">
        <Frame />
      </div>
    </div>
  );
}

function Frame4({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="absolute bg-[#f8f3df] content-stretch flex flex-col h-[38px] items-center justify-center left-[463px] px-[6px] py-[7px] rounded-[8px] top-[495px] w-[520px]">
      <div aria-hidden="true" className="absolute border border-[#534e37] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Usuario"
        className="w-full h-full bg-transparent px-[8px] font-['Work_Sans:Light',sans-serif] font-light leading-[20px] text-[#27423f] text-[18px] outline-none border-none"
      />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex h-full items-center pl-[8px] pr-[6px] relative shrink-0 w-[102px]">
      <p className="font-['Work_Sans:Light',sans-serif] font-light leading-[20px] relative shrink-0 text-[#27423f] text-[18px] whitespace-nowrap">Contraseña</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0 w-full">
      <div className="flex flex-row items-center self-stretch">
        <Frame3 />
      </div>
    </div>
  );
}

function Frame5({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="absolute bg-[#f8f3df] content-stretch flex flex-col h-[38px] items-center justify-center left-[463px] px-[6px] py-[7px] rounded-[8px] top-[639px] w-[520px]">
      <div aria-hidden="true" className="absolute border border-[#534e37] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      <input
        type="password"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Contraseña"
        className="w-full h-full bg-transparent px-[8px] font-['Work_Sans:Light',sans-serif] font-light leading-[20px] text-[#27423f] text-[18px] outline-none border-none"
      />
    </div>
  );
}

function Group({ onSubmit }: { onSubmit: () => void }) {
  return (
    <div className="absolute contents left-[617px] top-[732px]">
      <button
        onClick={onSubmit}
        className="absolute bg-[#27423f] h-[38px] left-[617px] rounded-[15px] top-[737px] w-[206px] hover:opacity-90 transition-opacity cursor-pointer"
      />
      <button
        onClick={onSubmit}
        className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['FONTSPRING_DEMO_-_Isidora_Sans:Regular',sans-serif] h-[34px] justify-center leading-[0] left-[723px] not-italic text-[32px] text-center text-white top-[749px] w-[162px] cursor-pointer"
      >
        <p className="leading-[normal]">Ingresar</p>
      </button>
    </div>
  );
}

function Datos({ usuario, setUsuario, password, setPassword, onSubmit }: {
  usuario: string;
  setUsuario: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  onSubmit: () => void;
}) {
  return (
    <div className="absolute contents left-[407px] top-[199px]" data-name="datos">
      <div className="absolute bg-[#dbfcbd] left-[407px] rounded-[25px] size-[626px] top-[199px]" />
      <Frame4 value={usuario} onChange={setUsuario} />
      <p className="absolute font-['FONTSPRING_DEMO_-_Isidora_Sans_Alt_Black:Regular',sans-serif] leading-[normal] left-[463px] not-italic text-[#1c1c3a] text-[32px] top-[433px] whitespace-nowrap">Usuario</p>
      <Frame5 value={password} onChange={setPassword} />
      <p className="absolute font-['FONTSPRING_DEMO_-_Isidora_Sans_Alt_Black:Regular','Noto_Sans:Black',sans-serif] leading-[normal] left-[463px] text-[#1c1c3a] text-[32px] top-[577px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 900" }}>
        Contraseña
      </p>
      <div className="absolute left-[619px] size-[201px] top-[232px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 201 201">
          <circle cx="100.5" cy="100.5" fill="var(--fill-0, #F8F4E1)" id="Ellipse 2" r="99" stroke="var(--stroke-0, #27423F)" strokeWidth="3" />
        </svg>
      </div>
      <Group onSubmit={onSubmit} />
    </div>
  );
}

export default function InicioSesionPage({ onBack }: { onBack: () => void }) {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('Login:', { usuario, password });
    alert('Inicio de sesión exitoso!');
  };

  return (
    <div className="bg-[#f8f4e1] relative size-full min-h-screen overflow-auto" data-name="Inicio Sesion">
      <div className="absolute inset-[44.14%_-25.14%_-32.62%_61.67%] z-0" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 914 906">
          <path d={svgPaths.p3dbf2e80} fill="var(--fill-0, #DFD6B4)" id="Vector" />
        </svg>
      </div>
      <Heading onBack={onBack} />
      <Datos
        usuario={usuario}
        setUsuario={setUsuario}
        password={password}
        setPassword={setPassword}
        onSubmit={handleSubmit}
      />
      <div className="absolute h-[134px] left-[601px] top-[266px] w-[238px] z-10" data-name="Empathy Map 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgEmpathyMap1} />
      </div>
    </div>
  );
}
