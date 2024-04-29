import { useCallback } from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const AndroidLarge = () => {
  const navigate = useNavigate();

  const onGroupIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupIcon2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={css`
        width: 100%;
        position: relative;
        border-radius: var(--br-mini);
        background-color: var(--color-white);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 0px 0px var(--padding-5xl);
        box-sizing: border-box;
        gap: 32px;
        line-height: normal;
        letter-spacing: normal;
      `}
    >
      <div
        className={css`
          align-self: stretch;
          height: 800px;
          position: relative;
          background-color: var(--color-white);
          display: none;
        `}
      />
      <section
        className={css`
          align-self: stretch;
          border-radius: 0px 0px var(--br-3xs) var(--br-3xs);
          background-color: var(--color-cadetblue);
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
          padding: 26px var(--padding-mini) var(--padding-8xs);
          box-sizing: border-box;
          max-width: 100%;
          gap: var(--gap-xl);
          z-index: 1;
          text-align: left;
          font-size: 16px;
          color: var(--color-darkslategray-100);
          font-family: var(--font-lato);
        `}
      >
        <div
          className={css`
            height: 140px;
            width: 360px;
            position: relative;
            border-radius: 0px 0px var(--br-3xs) var(--br-3xs);
            background-color: var(--color-cadetblue);
            display: none;
            max-width: 100%;
          `}
        />
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-12xs) 0px 0px;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-smi);
            `}
          >
            <img
              className={css`
                width: 30px;
                height: 30px;
                position: relative;
                cursor: pointer;
                z-index: 2;
              `}
              loading="lazy"
              alt=""
              src="/group-2.svg"
              onClick={onGroupIconClick}
            />
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 0px 0px 0px var(--padding-mini);
              `}
            >
              <div
                className={css`
                  height: 40px;
                  width: 40px;
                  position: relative;
                  border-radius: var(--br-xs);
                  background-color: var(--color-gainsboro-200);
                  z-index: 2;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    border-radius: var(--br-xs);
                    background-color: var(--color-gainsboro-200);
                    width: 100%;
                    height: 100%;
                    display: none;
                  `}
                />
                <img
                  className={css`
                    position: absolute;
                    top: 8px;
                    left: 7px;
                    width: 25px;
                    height: 25px;
                    object-fit: cover;
                    z-index: 3;
                  `}
                  loading="lazy"
                  alt=""
                  src="/call-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 4px;
          `}
        >
          <img
            className={css`
              width: 87px;
              height: 86px;
              position: relative;
              border-radius: var(--br-131xl);
              object-fit: cover;
              z-index: 2;
            `}
            loading="lazy"
            alt=""
            src="/premium-vector---pet-shop-logo-design-with-dog-and-cat-in-the-middle-of-dog-paws-animal-stencil-vector-illustration-12@2x.png"
          />
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              padding: 0px var(--padding-5xl);
            `}
          >
            <div
              className={css`
                position: relative;
                font-weight: 500;
                display: inline-block;
                min-width: 39px;
                z-index: 2;
              `}
            >
              Black
            </div>
          </div>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-12xs) 0px 0px;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              justify-content: flex-start;
              gap: var(--gap-smi);
            `}
          >
            <div
              className={css`
                width: 30px;
                height: 30px;
                position: relative;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  width: 100%;
                  height: 100%;
                  cursor: pointer;
                  z-index: 2;
                `}
                alt=""
                src="/group-3.svg"
                onClick={onGroupIcon2Click}
              />
              <img
                className={css`
                  position: absolute;
                  top: 9px;
                  left: 14px;
                  width: 3px;
                  height: 13px;
                  z-index: 3;
                `}
                loading="lazy"
                alt=""
                src="/group-21.svg"
              />
            </div>
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-end;
                padding: 0px var(--padding-mini) 0px 0px;
              `}
            >
              <div
                className={css`
                  height: 40px;
                  width: 40px;
                  position: relative;
                  border-radius: var(--br-xs);
                  background-color: var(--color-silver);
                  z-index: 2;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    border-radius: var(--br-xs);
                    background-color: var(--color-silver);
                    width: 100%;
                    height: 100%;
                    display: none;
                  `}
                />
                <img
                  className={css`
                    position: absolute;
                    top: 8px;
                    left: 10px;
                    width: 25px;
                    height: 25px;
                    object-fit: cover;
                    z-index: 3;
                  `}
                  loading="lazy"
                  alt=""
                  src="/video-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px var(--padding-mid) 224px;
          box-sizing: border-box;
          position: relative;
          max-width: 100%;
          text-align: left;
          font-size: var(--font-size-sm);
          color: var(--color-darkslategray-100);
          font-family: var(--font-lato);
        `}
      >
        <div
          className={css`
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--gap-4xs);
            max-width: 100%;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              padding: 0px var(--padding-xl) 0px 0px;
              gap: var(--gap-3xs);
            `}
          >
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 0px var(--padding-14xl);
              `}
            >
              <button
                className={css`
                  cursor: pointer;
                  border: none;
                  padding: var(--padding-8xs) var(--padding-mid);
                  background-color: var(--color-gainsboro-100);
                  border-radius: var(--br-3xs);
                  overflow: hidden;
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  justify-content: flex-start;
                  white-space: nowrap;
                  z-index: 1;
                `}
              >
                <div
                  className={css`
                    position: relative;
                    font-size: var(--font-size-sm);
                    font-family: var(--font-lato);
                    color: var(--color-darkslategray-100);
                    text-align: left;
                    display: inline-block;
                    min-width: 54px;
                  `}
                >
                  Hi, Nis....
                </div>
              </button>
            </div>
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 0px var(--padding-14xl);
              `}
            >
              <div
                className={css`
                  border-radius: var(--br-3xs);
                  background-color: var(--color-gainsboro-100);
                  overflow: hidden;
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  justify-content: flex-start;
                  padding: var(--padding-8xs) var(--padding-mid);
                  white-space: nowrap;
                  z-index: 1;
                `}
              >
                <div
                  className={css`
                    position: relative;
                    display: inline-block;
                    min-width: 123px;
                  `}
                >
                  How are you today?
                </div>
              </div>
            </div>
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: flex-end;
                justify-content: flex-start;
                gap: var(--gap-5xs);
              `}
            >
              <div
                className={css`
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-end;
                  padding: 0px 0px 8.3px;
                `}
              >
                <img
                  className={css`
                    width: 25px;
                    height: 24.7px;
                    position: relative;
                    border-radius: var(--br-131xl);
                    object-fit: cover;
                    z-index: 1;
                  `}
                  loading="lazy"
                  alt=""
                  src="/premium-vector---pet-shop-logo-design-with-dog-and-cat-in-the-middle-of-dog-paws-animal-stencil-vector-illustration-13@2x.png"
                />
              </div>
              <div
                className={css`
                  border-radius: var(--br-3xs);
                  background-color: var(--color-gainsboro-100);
                  overflow: hidden;
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  justify-content: flex-start;
                  padding: var(--padding-8xs) var(--padding-mid);
                  z-index: 1;
                `}
              >
                <div
                  className={css`
                    position: relative;
                  `}
                >
                  <p
                    className={css`
                      margin: 0;
                      white-space: pre-wrap;
                    `}
                  >
                    We have to find another dog
                  </p>
                  <p
                    className={css`
                      margin: 0;
                    `}
                  >
                    ....!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              padding: 0px var(--padding-14xl);
              font-size: var(--font-size-smi);
              color: var(--color-darkgray-100);
            `}
          >
            <div
              className={css`
                position: relative;
                display: inline-block;
                min-width: 34px;
                white-space: nowrap;
                z-index: 1;
              `}
            >
              10:02
            </div>
          </div>
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-end;
              padding: 0px var(--padding-14xl);
            `}
          >
            <div
              className={css`
                border-radius: var(--br-3xs);
                background-color: var(--color-gainsboro-100);
                overflow: hidden;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                padding: var(--padding-8xs) var(--padding-mid);
                z-index: 1;
              `}
            >
              <div
                className={css`
                  position: relative;
                `}
              >
                <p
                  className={css`
                    margin: 0;
                  `}
                >
                  I am fine. Thank you!
                </p>
                <p
                  className={css`
                    margin: 0;
                    white-space: pre-wrap;
                  `}
                >
                  Do you miss me? Like Sun
                </p>
                <p
                  className={css`
                    margin: 0;
                  `}
                >
                  miss the sea. haha
                </p>
              </div>
            </div>
          </div>
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-end;
            `}
          >
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 0px 0px 0px var(--padding-xl);
                gap: var(--gap-5xs);
              `}
            >
              <div
                className={css`
                  border-radius: var(--br-3xs);
                  background-color: var(--color-gainsboro-100);
                  overflow: hidden;
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  justify-content: flex-start;
                  padding: var(--padding-8xs) var(--padding-mid);
                  z-index: 1;
                `}
              >
                <div
                  className={css`
                    position: relative;
                  `}
                >
                  <p
                    className={css`
                      margin: 0;
                    `}
                  >
                    Oh really wonderful
                  </p>
                  <p
                    className={css`
                      margin: 0;
                    `}
                  >{`immediately admit the `}</p>
                  <p
                    className={css`
                      margin: 0;
                    `}
                  >{`medical support center. `}</p>
                </div>
              </div>
              <div
                className={css`
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                  padding: 18px 0px 0px;
                `}
              >
                <img
                  className={css`
                    width: 25px;
                    height: 24.5px;
                    position: relative;
                    border-radius: var(--br-131xl);
                    object-fit: cover;
                    z-index: 1;
                  `}
                  loading="lazy"
                  alt=""
                  src="/premium-vector---pet-shop-logo-design-with-dog-and-cat-in-the-middle-of-dog-paws-animal-stencil-vector-illustration-6@2x.png"
                />
              </div>
            </div>
          </div>
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-end;
              padding: 0px var(--padding-14xl);
              font-size: var(--font-size-smi);
              color: var(--color-darkgray-100);
            `}
          >
            <div
              className={css`
                position: relative;
                display: inline-block;
                min-width: 34px;
                white-space: nowrap;
                z-index: 1;
              `}
            >
              10:12
            </div>
          </div>
        </div>
        <img
          className={css`
            height: 30px;
            width: 30px;
            position: absolute;
            margin: 0 !important;
            right: 9px;
            bottom: -5px;
            object-fit: cover;
            z-index: 1;
          `}
          loading="lazy"
          alt=""
          src="/artificialintelligence-1@2x.png"
        />
      </section>
      <footer
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px var(--padding-mid);
          box-sizing: border-box;
          max-width: 100%;
        `}
      >
        <div
          className={css`
            flex: 1;
            border-radius: var(--br-mini);
            background-color: var(--color-gainsboro-100);
            overflow: hidden;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-3xs) var(--padding-mini);
            box-sizing: border-box;
            position: relative;
            gap: var(--gap-3xs);
            max-width: 100%;
            z-index: 1;
          `}
        >
          <img
            className={css`
              height: 20px;
              width: 20px;
              position: relative;
              object-fit: cover;
            `}
            loading="lazy"
            alt=""
            src="/attachpaperclipsymbol-1@2x.png"
          />
          <img
            className={css`
              height: 25px;
              width: 25px;
              position: absolute;
              margin: 0 !important;
              right: 15px;
              bottom: 7px;
              object-fit: cover;
            `}
            loading="lazy"
            alt=""
            src="/happy-1@2x.png"
          />
        </div>
      </footer>
    </div>
  );
};

export default AndroidLarge;
