import {
  faArrowUpRightFromSquare,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { websiteName } from "App";
import { formatNumber } from "shared/utils/commons";

function Bridge() {
  return (
    <>
      <Helmet>
        <title>{websiteName} | Bridge</title>
      </Helmet>
      <div className="max-w-2xl mx-auto px-6 text-neutral-600 dark:text-neutral-400 leading-7 text-justify">
        {/* Title */}
        <div className="text-center mb-4">
          <h1 className="font-bold text-4xl inline text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-purple-500">
            Bridge
          </h1>
        </div>

        <p>
          Use the{" "}
          <a
            href="https://satellite.money/?asset_denom=uusdc&source=ethereum&destination=secret"
            target="_blank"
            className="pb-0.5 border-b border-neutral-400 dark:border-neutral-600 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-colors"
          >
            Axelar Bridge
          </a>{" "}
          to bridge your assets from blockchains such as Ethereum, Binance Smart
          Chain (BSC), Arbitrum, Avalance, Moonbeam and Polygon to Secret
          Network!
        </p>
        <br />
        <p>
          <span className="select-none">
            <span className="inline-block bg-emerald-500 dark:bg-green-800 text-white text-xs py-0.5 px-1.5 rounded uppercase font-semibold">
              Protip
            </span>{" "}
            –{" "}
          </span>
          After bridging your assets from Axelar Bridge, they remain publicly
          visible. If you want to make your assets private, wrap them using{" "}
          <Link
            to={"/wrap"}
            className="pb-0.5 border-b border-neutral-400 dark:border-neutral-600 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-colors"
          >
            <FontAwesomeIcon icon={faShuffle} size={"xs"} className="mr-2" />
            Secret Wrap
          </Link>
          ! Once wrapped, no one can view your assets on-chain unless they have
          the right viewing key.
        </p>
        <a
          href="https://satellite.money/?asset_denom=uusdc&source=ethereum&destination=secret"
          target="_blank"
          className="text-white block my-6 p-3 w-full text-center font-semibold bg-cyan-600 dark:bg-cyan-600 rounded-lg text-sm hover:bg-cyan-500 dark:hover:bg-cyan-500 focus:bg-cyan-600 dark:focus:bg-cyan-600 transition-colors"
        >
          Go to the Axelar Bridge
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2" />
        </a>
      </div>
    </>
  );
}

export default Bridge;
