import React from "react";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllParagraphs } from "../../redux/textGenerator/textGeneratorSlice";
import { useSelector } from "react-redux";

import { textGeneratorSelectors } from "../../redux/textGenerator/textGeneratorSlice";

export default function index() {
  const [inputValue, setInputValue] = useState(4);
  const [format, setFormat] = useState('text');
  const dispatch = useDispatch();
  const pragraphs = useSelector(textGeneratorSelectors.selectAll);
  
  useEffect(() => {
     dispatch(getAllParagraphs({ inputValue, format }));
  }, [dispatch, format, inputValue]);

  const min = 1;
  const max = 100;

  const handleChange = event => {
    const value = Math.max(min, Math.min(max, Number(event.target.value)));
    setInputValue(value);
  };

  return (
    <div>
      <h1>React sample text generator app</h1>
      <hr />

      <form className="form-inline">
        <div className="row">
          <div className="col-xs-12 col-md-6 col-lg-2">
            <div className="form-group">
              <label>Paragraphs</label>

              <div className="number">
                <input
                  type="number"
                  value={inputValue}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-md-6 col-lg-2">
            <div className="form-group">
              <label>Include HTML</label>

              <div className="select">
                <select className="form-control"
                  value={format}
                  onChange={e => setFormat(e.target.value)}
                  >
                  <option value="html">Yes</option>
                  <option value="text">No</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="content pt-4">
        <div className="row">
          <div className="col">
              <d className="output jumbotron">
                {pragraphs[0]}
              </d>
          </div>
        </div>
      </div>
    </div>
  );
}
