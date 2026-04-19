import imgMesaDeTrabajo4A12 from "figma:asset/cae6f7c829fd5e18b3ab00859116c2b1a0bf4bbb.png";
import img14De1E110954591Y3JvcCw2Ndm3LdUwMzQsOta4Lda1 from "figma:asset/2cbf6043fa2de2f69e181c30061da340296e2607.png";
import img473403Ce8Dee60Dab42B0497450711DeElementoDeDisenoDeCodigoDeBarrasDelProductoPng1 from "figma:asset/39dbf874b4ad0d322c2cf9e24aab3123135df366.png";

function Heading({ onBack, onLogout }: { onBack: () => void; onLogout: () => void }) {
  return (
    <div className="absolute contents left-0 top-[-35px]" data-name="Heading">
      <div className="absolute bg-[#27423f] h-[80px] left-0 top-0 w-[1440px]" />
      <div className="absolute left-[1365px] size-[58px] top-[11px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 58">
          <circle cx="29" cy="29" fill="var(--fill-0, #FCDA4C)" id="Ellipse 1" r="29" />
        </svg>
      </div>
      <button onClick={onLogout} className="absolute font-['Inter:Regular',sans-serif] font-normal h-[18px] leading-[normal] left-[1220px] not-italic text-[#a0aec0] text-[18px] top-[31px] w-[125px] cursor-pointer hover:opacity-80 transition-opacity">
        Cerrar sesión
      </button>
      <button onClick={onBack} className="absolute h-[102px] left-[46px] top-[-35px] w-[171px] cursor-pointer hover:opacity-90 transition-opacity" data-name="Mesa de trabajo 4a1 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[163.76%] left-0 max-w-none top-0 w-full" src={imgMesaDeTrabajo4A12} />
        </div>
      </button>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[1100px] top-[897px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['FONTSPRING_DEMO_-_Isidora_Sans_Alt_Black:Regular',sans-serif] justify-center leading-[0] left-[1100px] not-italic text-[#27423f] text-[28px] top-[914px] whitespace-nowrap">
        <p className="leading-[normal]">Guardar cambios</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[1077px] top-[880px]">
      <button className="absolute bg-[#a4def2] h-[67px] left-[1077px] rounded-[15px] top-[880px] w-[285px] cursor-pointer hover:opacity-90 transition-opacity" />
      <Group />
    </div>
  );
}

export default function VistaProcesoPage({ onBack, onLogout }: { onBack: () => void; onLogout: () => void }) {
  return (
    <div className="bg-[#f8f4e1] relative size-full min-h-screen overflow-auto" data-name="Vista Proceso">
      <Heading onBack={onBack} onLogout={onLogout} />
      <div className="absolute border-5 border-[#27423f] border-solid h-[122px] left-[39px] rounded-[15px] top-[113px] w-[779px]" />
      <div className="absolute border-5 border-[#27423f] border-solid h-[122px] left-[1199px] rounded-[15px] top-[113px] w-[199px]" />
      <div className="absolute bg-[#f8f4e1] border-5 border-[#27423f] border-solid h-[778px] left-[39px] rounded-[15px] top-[199px] w-[1362px]" />
      {/* Removed "Procesos Abiertos" text */}
      <p className="absolute font-['FONTSPRING_DEMO_-_Isidora_Sans_Alt_Black:Regular',sans-serif] leading-[normal] left-[61px] not-italic text-[#23444d] text-[48px] top-[124px] w-[735px]">MED 0001 ABC 0000</p>
      <div className="absolute left-[1316px] size-[58px] top-[132px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 58">
          <circle cx="29" cy="29" fill="var(--fill-0, #FD7471)" id="Ellipse 2" r="29" />
        </svg>
      </div>
      <p className="absolute font-['FONTSPRING_DEMO_-_Isidora_Sans_Alt_Black:Regular','Noto_Sans:Black',sans-serif] h-[34px] leading-[normal] left-[1226px] text-[#27423f] text-[28px] top-[140px] w-[84px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 900" }}>
        3 Días
      </p>
      <div className="absolute bg-[#d9d9d9] h-[721px] left-[57px] top-[229px] w-[761px]" />
      <div className="absolute bg-[#a4def2] h-[578px] left-[854px] rounded-[15px] top-[229px] w-[520px]" />
      <div className="absolute font-['FONTSPRING_DEMO_-_Isidora_Sans:Regular','Noto_Sans:Regular',sans-serif] h-[478px] leading-[0] left-[871px] text-[#27423f] text-[23px] top-[311px] w-[486px] whitespace-pre-wrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[normal] mb-0">Queja Secretaría de desarrollo económico.</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal] mb-0">Creado el 9 de Enero de 2026, por medio de Correo electrónico.</p>
        <p className="mb-0">
          <span className="font-['Cormorant_Garamond:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[normal]">{`>`}</span>
          <span className="font-['FONTSPRING_DEMO_-_Isidora_Sans_Alt_Light_It:Regular','Noto_Sans:Regular',sans-serif] italic leading-[normal]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>{` `}</span>
          <span className="font-['FONTSPRING_DEMO_-_Isidora_Sans_Alt_Light_It:Regular','Noto_Sans:Regular',sans-serif] italic leading-[normal]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>{`Atendido por: `}</span>
          <span className="leading-[normal]">Manuela Villegas Morales.</span>
        </p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal] mb-0">Juan Vargas Botero. 57 años.</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="mb-0">
          <span className="font-['FONTSPRING_DEMO_-_Isidora_Sans:Regular','Noto_Sans:Regular',sans-serif] leading-[normal]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
            El d
          </span>
          <span className="leading-[normal]">í</span>
          <span className="font-['FONTSPRING_DEMO_-_Isidora_Sans:Regular','Noto_Sans:Regular',sans-serif] leading-[normal]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>{`a de ayer en la inmediaciones del barrio `}</span>
        </p>
        <p className="mb-0">
          <span className="font-['FONTSPRING_DEMO_-_Isidora_Sans:Regular','Noto_Sans:Regular',sans-serif] leading-[normal]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
            Manila, a la altura del mall Medellin, me encontr
          </span>
          <span className="leading-[normal]">{`é `}</span>
          <span className="font-['FONTSPRING_DEMO_-_Isidora_Sans:Regular','Noto_Sans:Regular',sans-serif] leading-[normal]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
            unos toldos de ventas con el logo de la alcald
          </span>
          <span className="leading-[normal]">í</span>
          <span className="font-['FONTSPRING_DEMO_-_Isidora_Sans:Regular','Noto_Sans:Regular',sans-serif] leading-[normal]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
            a
          </span>
          <span className="leading-[normal]">{` `}</span>
          <span className="font-['FONTSPRING_DEMO_-_Isidora_Sans:Regular','Noto_Sans:Regular',sans-serif] leading-[normal]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>{`de `}</span>
          <span className="leading-[normal]">M</span>
          <span className="font-['FONTSPRING_DEMO_-_Isidora_Sans:Regular','Noto_Sans:Regular',sans-serif] leading-[normal]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
            edell
          </span>
          <span className="leading-[normal]">í</span>
          <span className="font-['FONTSPRING_DEMO_-_Isidora_Sans:Regular','Noto_Sans:Regular',sans-serif] leading-[normal]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
            n, escribo esta petici
          </span>
          <span className="leading-[normal]">ó</span>
          <span className="font-['FONTSPRING_DEMO_-_Isidora_Sans:Regular','Noto_Sans:Regular',sans-serif] leading-[normal]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
            n con la duda
          </span>
          <span className="leading-[normal]">{` `}</span>
          <span className="font-['FONTSPRING_DEMO_-_Isidora_Sans:Regular','Noto_Sans:Regular',sans-serif] leading-[normal]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
            si podria acceder a estas en otra ocacion para
          </span>
          <span className="leading-[normal]">{` `}</span>
          <span className="font-['FONTSPRING_DEMO_-_Isidora_Sans:Regular','Noto_Sans:Regular',sans-serif] leading-[normal]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
            tener un lugar donde poner mi emprendimiento
          </span>
          <span className="leading-[normal]">{` `}</span>
          <span className="font-['FONTSPRING_DEMO_-_Isidora_Sans:Regular','Noto_Sans:Regular',sans-serif] leading-[normal]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
            de carrieles, porque es muy importante para
          </span>
        </p>
        <p className="mb-0">
          <span className="font-['FONTSPRING_DEMO_-_Isidora_Sans:Regular','Noto_Sans:Regular',sans-serif] leading-[normal]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
            mantener la cultura paisa
          </span>
          <span className="leading-[normal]">.</span>
        </p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal]">​</p>
      </div>
      <p className="absolute font-['FONTSPRING_DEMO_-_Isidora_Sans_Alt_Black:Regular',sans-serif] h-[34px] leading-[normal] left-[871px] not-italic text-[#27423f] text-[28px] top-[247px] w-[474px]">Formulario del ciudadano.</p>
      <Group1 />
      <div className="absolute font-['FONTSPRING_DEMO_-_Isidora_Sans_Alt_Black:Regular','Noto_Sans:Black',sans-serif] h-[520px] leading-[0] left-[77px] text-[24px] text-black top-[460px] w-[659px] whitespace-pre-wrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 900" }}>
        <p className="leading-[20px] mb-0">201830109175</p>
        <p className="leading-[20px] mb-0">
          <br aria-hidden="true" />
          Medellín, 27 / 06 / 2018
        </p>
        <p className="leading-[20px] mb-0">
          Señor
          <br aria-hidden="true" />
          CIUDADANO
          <br aria-hidden="true" />
          Peticionario
          <br aria-hidden="true" />
          La Ciudad
        </p>
        <p className="leading-[20px] mb-0">​</p>
        <p className="leading-[20px] mb-0">ASUNTO: Respuesta a PQRS 201810088206</p>
        <p className="leading-[20px] mb-0">​</p>
        <p className="leading-[20px] mb-0">Respetado señor ciudadano:</p>
        <p className="leading-[20px] mb-0">​</p>
        <p className="leading-[20px]">En atención a su petición, enviada vía PQRS a la alcaldía de Medellín, recibida el día 09 de Abril de 2018, donde nos informa "Primer piso de edificio de tres pisos montaron estudio de webcam y todas las noches las mujeres que trabajan en dicho lugar hacen bulla en el patio que da a tres edificios de vivienda, cantan ponen música y hablan a todo volumen, fuman toda la noche, ya es insoportable, no dejan dormir. Dirección: barrio La floresta, Cll 49d # 81a -51. Esto sucede Todos las noche, de 10pm -5am ". me permito informarle lo siguiente:</p>
      </div>
      <div className="absolute h-[146px] left-[335px] top-[226px] w-[187px]" data-name="14de1e110954591.Y3JvcCw2NDM3LDUwMzQsOTA4LDA 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img14De1E110954591Y3JvcCw2Ndm3LdUwMzQsOta4Lda1} />
      </div>
      <div className="absolute left-[61px] size-[215px] top-[311px]" data-name="473403ce8dee60dab42b0497450711de-elemento-de-diseno-de-codigo-de-barras-del-producto.png 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img473403Ce8Dee60Dab42B0497450711DeElementoDeDisenoDeCodigoDeBarrasDelProductoPng1} />
      </div>
    </div>
  );
}