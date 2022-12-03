import Options from "../models/options";
import PropTypes from 'prop-types';
import { log } from 'next-axiom';
import { useState } from "react";

// export default function OptionsContainer({ props: { options, changeOptions } }: { props: { options: Options, changeOptions: Function } }) {
function OptionsContainer({ options, changeOptions }: { options: Options, changeOptions: Function }) {

  const increaseParagraphs = () => {
    log.info('increaseSentencesCount', {
        metric: 'increaseSentencesCount',
        value: options.sentences_count + 1,
    })
    changeOptions({ sentences_count: options.sentences_count + 1 });
  };
  const decreaseParagraphs = () => {
    if (options.sentences_count == 1) {
        return
    }
    log.info('decreaseSentencesCount', {
        metric: 'decreaseSentencesCount',
        value: options.sentences_count - 1,
    })
    changeOptions({ sentences_count: options.sentences_count - 1 });
  };
  const updateCategory = (e: any) => {
        let opts = {}
        if (options.category === 'random') {
            opts = { vocalized: false };
        } else {
            opts = { vocalized: options.vocalized };
        }
        log.info('setCategory', {
            metric: 'setCategory',
            value: e.target.value,
        })
        changeOptions({ category: e.target.value, ...opts });
  };
  const toggleVocalized = (e: any) => {
    console.log(e.target.value)
    log.info('setVocalized', {
        metric: 'setVocalized',
        value: !options.vocalized
    })
    log.debug(`changing vocalized from ${options.vocalized} to ${!options.vocalized}`)
    changeOptions({ vocalized: !options.vocalized });
  };
  const increaseRepeat = () => {
    log.info('increaseRepeat', {metric: 'increaseRepeat', value: options.repeat + 1})
    changeOptions({ repeat: options.repeat + 1 }, false);
  };
  const decreaseRepeat = () => {
    if (options.repeat == 1) {
        return
    }
    log.info('decreaseRepeat', {metric: 'decreaseRepeat', value: options.repeat - 1})
    changeOptions({ repeat: options.repeat - 1 }, false);
  };

  let vocalizationCheckbox = <></>
  if (options.category !== 'random') {
    vocalizationCheckbox = (
        <div className="flex flex-inline gap-2">
            <div>بالتشكيل</div>
            <span className="flex flex-1 grow"></span>
            <input
                type="checkbox"
                checked={options.vocalized}
                onChange={toggleVocalized}
            />
            </div>
    )
  }


  return (
    <section>
      <div className="flex flex-col gap-3 text-gray-700">
        <div className="flex flex-inline gap-2">
          <div>عدد الجمل: {options.sentences_count}</div>
          <span className="flex flex-1 grow"></span>
          <button
            className="plusMinusBtn"
            onClick={decreaseParagraphs}
          >
            -
          </button>
          <button
            className="plusMinusBtn"
            onClick={increaseParagraphs}
          >
            +
          </button>
        </div>

        <div className="flex flex-inline gap-2">
          <div>التكرار: {options.repeat}</div>
          <span className="flex flex-1 grow"></span>
          <button
            className="plusMinusBtn"
            onClick={decreaseRepeat}
          >
            -
          </button>
          <button
            className="plusMinusBtn"
            onClick={increaseRepeat}
          >
            +
          </button>
        </div>

        <div className="flex flex-inline gap-2">
          <div>نوع النص</div>
          <span className="flex flex-1 grow"></span>
          <select
            value={options.category}
            onChange={updateCategory}
            className="w-1/3 dark:text-white"
          >
            <option value="random">عشوائي</option>

            <option value="proverb">مثل شعبي</option>
            <option value="poem">شعر</option>
          </select>
        </div>

        {vocalizationCheckbox}
      </div>
    </section>
  );
}

OptionsContainer.propTypes = {
    options: PropTypes.object.isRequired,
    changeOption: PropTypes.func,
}

export default OptionsContainer;
