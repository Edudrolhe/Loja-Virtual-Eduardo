
"use client";
export default function Botao({ texto, onClick, type="button" }) {
  return (
    <button type={type} className="btn" onClick={onClick}>{texto}</button>
  );
}
