import { useState } from 'react';
import svgPaths from "../../imports/svg-935sdhn4xv";
import imgFlorecita1 from "figma:asset/511107ae2525870e5484ba9fe2928c28be82c5ac.png";
import imgMesaDeTrabajo4A12 from "figma:asset/cae6f7c829fd5e18b3ab00859116c2b1a0bf4bbb.png";

interface FormData {
  nombre: string;
  apellidos: string;
  tipoDocumento: string;
  numeroDocumento: string;
  fecha: string;
  tipoPersona: string;
  correo: string;
  confirmarCorreo: string;
  secretaria: string;
  lugarSolicitud: string;
  genero: string;
  telefono: string;
  descripcion: string;
  aceptaTerminos: boolean;
}

function CustomSelect({
  value,
  onChange,
  placeholder,
  options
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: string[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-[#f8f3df] border border-[#534e37] border-solid rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] h-[38px] px-[6px] py-[7px] flex items-center justify-between"
      >
        <span className="font-['Work_Sans:Light',sans-serif] font-light leading-[20px] text-[#009eca] text-[18px] pl-[8px]">
          {value || placeholder}
        </span>
        <div className={`flex items-center justify-center transition-transform ${isOpen ? '' : 'rotate-180'}`}>
          <div className="overflow-clip relative size-[24px]">
            <div className="absolute inset-[36.98%_28.03%_37%_28.14%]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5175 6.24659">
                <path d={svgPaths.p2f532800} fill="var(--fill-0, #534E37)" />
              </svg>
            </div>
          </div>
        </div>
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-[#f8f3df] border border-[#534e37] rounded-[8px] shadow-lg max-h-[200px] overflow-y-auto">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className="w-full text-left px-[14px] py-[8px] hover:bg-[#009eca] hover:text-white font-['Work_Sans:Light',sans-serif] font-light text-[18px] text-[#534e37]"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function CustomInput({
  value,
  onChange,
  placeholder,
  type = "text"
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-[#f8f3df] border border-[#534e37] border-solid rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] h-[38px] px-[14px] py-[7px] font-['Work_Sans:Light',sans-serif] font-light leading-[20px] text-[#009eca] text-[18px] placeholder:text-[#009eca]"
    />
  );
}

export default function FormularioPage({ onBack }: { onBack: () => void }) {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    apellidos: '',
    tipoDocumento: '',
    numeroDocumento: '',
    fecha: '',
    tipoPersona: '',
    correo: '',
    confirmarCorreo: '',
    secretaria: '',
    lugarSolicitud: '',
    genero: '',
    telefono: '',
    descripcion: '',
    aceptaTerminos: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('Formulario enviado exitosamente!');
  };

  return (
    <div className="bg-[#f8f3df] relative size-full overflow-y-auto" data-name="Formulario">
      <div className="absolute inset-[67.05%_-27.29%_-17.32%_49.79%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1116 1214.59">
          <path d={svgPaths.p8d3f100} fill="var(--fill-0, #DFD6B4)" />
        </svg>
      </div>
      <div className="absolute bg-[#a4def2] h-[1926px] left-[49px] rounded-[25px] top-[236px] w-[1335px]" />

      {/* Heading */}
      <div className="absolute bg-[#27423f] h-[80px] left-0 top-0 w-[1440px]" />
      <div className="absolute left-[1365px] size-[58px] top-[11px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 58">
          <circle cx="29" cy="29" fill="var(--fill-0, #FCDA4C)" r="29" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[18px] leading-[normal] left-[1220px] not-italic text-[#a0aec0] text-[18px] top-[31px] w-[125px]">Iniciar sesión</p>

      {/* Logo */}
      <button onClick={onBack} className="absolute h-[102px] left-[46px] top-[-35px] w-[171px] cursor-pointer hover:opacity-90 transition-opacity">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[163.76%] left-0 max-w-none top-0 w-full" src={imgMesaDeTrabajo4A12} />
        </div>
      </button>

      {/* Title */}
      <p className="absolute font-['FONTSPRING_DEMO_-_Isidora_Sans_Alt_Black:Regular','Noto_Sans:Black',sans-serif] leading-[normal] left-[425px] text-[#23444d] text-[48px] top-[129px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 900" }}>
        Solicitud de petición
      </p>
      <div className="absolute h-[72px] left-[922px] top-[122px] w-[92px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.01%] left-[-0.02%] max-w-none top-[-9.9%] w-full" src={imgFlorecita1} />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Nombre */}
        <p className="absolute font-['FONTSPRING_DEMO_-_Isidora_Sans:Regular',sans-serif] leading-[normal] left-[272px] not-italic text-[#1c1c3a] text-[32px] top-[326px] whitespace-nowrap">Nombre</p>
        <div className="absolute left-[272px] top-[388px] w-[332px]">
          <CustomInput
            value={formData.nombre}
            onChange={(value) => setFormData({ ...formData, nombre: value })}
            placeholder="Nombre"
          />
        </div>

        {/* Apellidos */}
        <p className="absolute font-['FONTSPRING_DEMO_-_Isidora_Sans:Regular',sans-serif] leading-[normal] left-[762px] not-italic text-[#1c1c3a] text-[32px] top-[326px] whitespace-nowrap">Apellidos</p>
        <div className="absolute left-[762px] top-[388px] w-[332px]">
          <CustomInput
            value={formData.apellidos}
            onChange={(value) => setFormData({ ...formData, apellidos: value })}
            placeholder="Apellidos"
          />
        </div>

        {/* Tipo de documento */}
        <p className="absolute font-['FONTSPRING_DEMO_-_Isidora_Sans:Regular',sans-serif] leading-[normal] left-[272px] not-italic text-[#1c1c3a] text-[32px] top-[472px] whitespace-nowrap">Tipo de documento</p>
        <div className="absolute left-[272px] top-[534px] w-[332px]">
          <CustomSelect
            value={formData.tipoDocumento}
            onChange={(value) => setFormData({ ...formData, tipoDocumento: value })}
            placeholder="No seleccionado"
            options={['Cédula de Ciudadanía', 'Cédula de Extranjería', 'Pasaporte', 'NIT']}
          />
        </div>

        {/* Número de documento */}
        <p className="absolute font-['FONTSPRING_DEMO_-_Isidora_Sans:Regular',sans-serif] leading-[normal] left-[762px] not-italic text-[#1c1c3a] text-[32px] top-[472px] whitespace-nowrap">Numero de documento</p>
        <div className="absolute left-[762px] top-[534px] w-[332px]">
          <CustomInput
            value={formData.numeroDocumento}
            onChange={(value) => setFormData({ ...formData, numeroDocumento: value })}
            placeholder="Nùmero de documento"
          />
        </div>

        {/* Fecha */}
        <p className="absolute font-['FONTSPRING_DEMO_-_Isidora_Sans:Regular',sans-serif] leading-[normal] left-[278px] not-italic text-[#1c1c3a] text-[32px] top-[609px] whitespace-nowrap">Fecha</p>
        <div className="absolute left-[272px] top-[671px] w-[332px]">
          <CustomInput
            type="date"
            value={formData.fecha}
            onChange={(value) => setFormData({ ...formData, fecha: value })}
            placeholder="DD/MM/AAAA"
          />
        </div>

        {/* Tipo de persona */}
        <p className="absolute font-['FONTSPRING_DEMO_-_Isidora_Sans:Regular',sans-serif] leading-[normal] left-[768px] not-italic text-[#1c1c3a] text-[32px] top-[609px] whitespace-nowrap">tipo de persona</p>
        <div className="absolute left-[762px] top-[671px] w-[332px]">
          <CustomSelect
            value={formData.tipoPersona}
            onChange={(value) => setFormData({ ...formData, tipoPersona: value })}
            placeholder="No seleccionado"
            options={['Natural', 'Jurídica']}
          />
        </div>

        {/* Correo electrónico */}
        <p className="absolute font-['FONTSPRING_DEMO_-_Isidora_Sans:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] left-[272px] text-[#1c1c3a] text-[32px] top-[770px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          Correo electrónico
        </p>
        <div className="absolute left-[272px] top-[832px] w-[332px]">
          <CustomInput
            type="email"
            value={formData.correo}
            onChange={(value) => setFormData({ ...formData, correo: value })}
            placeholder="Example@gmail.com"
          />
        </div>

        {/* Confirmar correo */}
        <p className="absolute font-['FONTSPRING_DEMO_-_Isidora_Sans:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] left-[762px] text-[#1c1c3a] text-[32px] top-[770px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          Confirmar correo electrónico
        </p>
        <div className="absolute left-[762px] top-[832px] w-[332px]">
          <CustomInput
            type="email"
            value={formData.confirmarCorreo}
            onChange={(value) => setFormData({ ...formData, confirmarCorreo: value })}
            placeholder="Example@gmail.com"
          />
        </div>

        {/* Secretaría */}
        <p className="absolute font-['FONTSPRING_DEMO_-_Isidora_Sans:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] left-[278px] text-[#1c1c3a] text-[32px] top-[931px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          Secretaría
        </p>
        <div className="absolute left-[272px] top-[993px] w-[332px]">
          <CustomSelect
            value={formData.secretaria}
            onChange={(value) => setFormData({ ...formData, secretaria: value })}
            placeholder="No seleccionado"
            options={[
              'Secretaría de Seguridad, justicia y paz',
              'Secretaría de Gobierno',
              'Secretaría General',
              'Secretaría de Hacienda',
              'Secretaría de Educación'
            ]}
          />
        </div>

        {/* Lugar de la solicitud */}
        <p className="absolute font-['FONTSPRING_DEMO_-_Isidora_Sans:Regular',sans-serif] leading-[normal] left-[762px] not-italic text-[#1c1c3a] text-[32px] top-[931px] whitespace-nowrap">Lugar de la solicitud</p>
        <div className="absolute left-[762px] top-[993px] w-[332px]">
          <CustomSelect
            value={formData.lugarSolicitud}
            onChange={(value) => setFormData({ ...formData, lugarSolicitud: value })}
            placeholder="No seleccionado"
            options={['Medellín', 'Bello', 'Envigado', 'Itagüí', 'Sabaneta']}
          />
        </div>

        {/* Género */}
        <p className="absolute font-['FONTSPRING_DEMO_-_Isidora_Sans:Regular',sans-serif] leading-[normal] left-[278px] not-italic text-[#1c1c3a] text-[32px] top-[1068px] whitespace-nowrap">Genero</p>
        <div className="absolute left-[272px] top-[1130px] w-[332px]">
          <CustomSelect
            value={formData.genero}
            onChange={(value) => setFormData({ ...formData, genero: value })}
            placeholder="No seleccionado"
            options={['Masculino', 'Femenino', 'Otro', 'Prefiero no decir']}
          />
        </div>

        {/* Teléfono */}
        <p className="absolute font-['FONTSPRING_DEMO_-_Isidora_Sans:Regular',sans-serif] leading-[normal] left-[768px] not-italic text-[#1c1c3a] text-[32px] top-[1061px] whitespace-nowrap">Telefono</p>
        <div className="absolute left-[762px] top-[1123px] w-[332px]">
          <CustomInput
            type="tel"
            value={formData.telefono}
            onChange={(value) => setFormData({ ...formData, telefono: value })}
            placeholder="305 00000000"
          />
        </div>

        {/* Descripción */}
        <p className="absolute font-['FONTSPRING_DEMO_-_Isidora_Sans:Regular','Noto_Sans:Regular',sans-serif] h-[43px] leading-[normal] left-[200px] text-[#1c1c3a] text-[32px] top-[1222px] w-[199px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          Descripción
        </p>
        <div className="absolute bg-[#f8f3df] border border-[#534e37] border-solid h-[623px] left-[200px] rounded-[15px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[1293px] w-[1064px]">
          <textarea
            value={formData.descripcion}
            onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
            placeholder="Descripción del hecho"
            className="absolute inset-0 w-full h-full p-[21px] bg-transparent font-['FONTSPRING_DEMO_-_Isidora_Sans:Regular','Noto_Sans:Regular',sans-serif] leading-[41px] text-[#009eca] text-[32px] tracking-[0.4px] resize-none border-0 outline-none placeholder:text-[#009eca]"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}
          />
        </div>

        {/* Términos y condiciones */}
        <div className="absolute flex items-center left-[300px] top-[1959px]">
          <div className="relative">
            <div className="bg-[#8e8e8e] h-[38px] rounded-[25px] w-[88px]" />
            <button
              type="button"
              onClick={() => setFormData({ ...formData, aceptaTerminos: !formData.aceptaTerminos })}
              className={`absolute left-[13px] rounded-[25px] size-[31px] top-[4px] transition-colors ${
                formData.aceptaTerminos ? 'bg-white' : 'bg-gray-400'
              }`}
            />
          </div>
        </div>
        <p className="absolute font-['Dongle:Light','Noto_Sans:Regular',sans-serif] h-[22px] leading-[0] left-[423px] text-[0px] text-black top-[1968px] w-[798px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          <span className="font-['FONTSPRING_DEMO_-_Isidora_Sans:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] text-[36px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>Acepta </span>
          <span className="font-['FONTSPRING_DEMO_-_Isidora_Sans:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] text-[#009eca] text-[36px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
            términos, condiciones y política
          </span>
        </p>

        {/* Botón Enviar */}
        <button
          type="submit"
          className="absolute bg-[#27423f] h-[71px] left-[561px] rounded-[15px] top-[2040px] w-[401px] hover:opacity-90 transition-opacity cursor-pointer"
        >
          <p className="-translate-x-1/2 absolute font-['FONTSPRING_DEMO_-_Isidora_Sans:Regular',sans-serif] h-[63px] leading-[normal] left-[50%] not-italic text-[48px] text-center text-white top-0 w-[317px]">Enviar</p>
        </button>
      </form>
    </div>
  );
}
