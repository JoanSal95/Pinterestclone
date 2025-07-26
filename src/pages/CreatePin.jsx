import React, { useState, useRef } from "react";
import "./CreatePin.css";

function CreatePin() {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [selectedBoard, setSelectedBoard] = useState("ideas");
  const fileInputRef = useRef(null);

  const handleFileClick = () => fileInputRef.current.click();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Archivo seleccionado:", file);

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      title,
      description,
      link,
      tags,
      selectedBoard,
    });

  };

  return (
    <section className="create-pin">
      <div className="conteiner-form">

        <div className="upload-box" onClick={handleFileClick}>
          <div className="upload-icon">
            <svg viewBox="0 0 24 24" height="32" width="32">
              <path d="M15.3 12.7 13 10.42V17h-2v-6.59l-2.3 2.3-1.4-1.42L12 6.6l4.7 4.7zM24 12a12 12 0 1 1-24 0 12 12 0 0 1 24 0M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20" />
            </svg>
          </div>
          <p>Elige un archivo o arrástralo aquí</p>
          <small>JPG hasta 20 MB o MP4 hasta 200 MB</small>
          <input
            type="file"
            accept="image/*,video/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>

        <form className="pin-form" onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Agrega un título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            placeholder="Agrega una descripción"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            type="url"
            placeholder="Agrega un enlace"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />

          <select
            value={selectedBoard}
            onChange={(e) => setSelectedBoard(e.target.value)}
          >
            <option value="ideas">Ideas</option>
            <option value="proyectos">Proyectos</option>
            <option value="favoritos">Favoritos</option>
          </select>

          <input
            type="text"
            placeholder="Etiquetas separadas por coma"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />

          <button type="submit">Guardar</button>
        </form>
      </div>

    </section>
  );
}

export default CreatePin;
