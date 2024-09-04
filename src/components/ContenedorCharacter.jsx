import React from 'react';

export const ContenedorCharacter = ({ characters, formtaImageuRL, nextPage, previousPage }) => {
    return (
        <>
            <div className="d-flex flex-row row row-cols-5">
                {
                    characters &&
                    characters.map((char) => (
                        <div key={char.id}>
                            <h5 className="text-black">{char.name}</h5>
                            <img src={formtaImageuRL(char)} style={{ width: '8rem' }} className="rounded-5 rounded-2 p-3 mb-2 bg-black text-white : border border-danger" />
                        </div>
                    ))
                }
            </div>
            <div className="d-flex justify-content-between m-3">
                <button className="p-3 mb-2 bg-danger text-white" onClick={previousPage}>Previous</button>
                <button className="p-3 mb-2 bg-danger text-white" onClick={nextPage}>Next</button>
            </div>
        </>
    );
}