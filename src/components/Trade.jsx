import react from 'react'
import './css/trade.css'
import Details from './Details'
const Trade = () => {
  const [open, setOpen] = react.useState([])
  // const [tradeData, setTradeData] = useState(null);
  react.useEffect(() => {
    //     const indicators = [
    //       'NE.EXP.GNFS.ZS',
    //       'NE.IMP.GNFS.ZS',
    //       'TX.VAL.MRCH.CD.WT',
    //       'TM.VAL.MRCH.CD.WT',
    //       'NE.TRD.GNFS.ZS'
    //     ]
    //     for (let code of indicators) {
    //   fetch(`https://api.worldbank.org/v2/country/PK/indicator/${code}?format=json`)
    //     .then(res => res.json())
    //     .then(data => console.log(code, data));
    // }
    // fetch trade data from world bank api and save in state
    // try {
    //   const reponse = fetch(
    //     'https://wits.worldbank.org/API/V1/SDMX/V21/COMTRADE/PAK/all/WLD/TOTAL/2022?format=JSON'
    //   ).then(res => res.json())
    //   console.log(reponse)
    // } catch (error) {
    //   console.log('Error occur during fetching data', error)
    // }
  }, [])

  const handleHeadingClick = index => {
    setOpen(pre => {
      const newOpen = [...pre]
      newOpen[index] = !newOpen[index]
      return newOpen
    })
  }

  const headings = [
    {
      title: 'Exports of goods and services (% of GDP)',
      code: 'NE.EXP.GNFS.ZS',
      desc: "This indicator measures the share of Pakistan's total economic output that comes from exports of goods and services. A higher percentage shows greater integration into the global market and stronger foreign exchange earnings."
    },
    {
      title: 'Imports of goods and services (% of GDP)',
      code: 'NE.IMP.GNFS.ZS',
      desc: "This indicator shows the proportion of Pakistan's total economic output that is spent on importing goods and services. High import dependence may create trade imbalances and pressure on foreign reserves."
    },
    {
      title: 'Merchandise exports (current US$)',
      code: 'TX.VAL.MRCH.CD.WT',
      desc: 'This metric represents the total value of physical goods exported by Pakistan, measured in current US dollars. It highlights Pakistan’s ability to sell products such as textiles, rice, and leather goods in international markets.'
    },
    {
      title: 'Merchandise imports (current US$)',
      code: 'TM.VAL.MRCH.CD.WT',
      desc: 'This metric captures the total value of physical goods imported into Pakistan, measured in current US dollars. It reflects the country’s reliance on imported items like fuel, machinery, and raw materials.'
    },
    {
      title: 'Trade (% of GDP)',
      code: 'NE.TRD.GNFS.ZS',
      desc: 'This indicator measures the sum of exports and imports of goods and services as a percentage of Pakistan’s GDP. It shows how open and dependent the economy is on international trade.'
    },
    {
      title: 'Current account balance (% of GDP)',
      code: 'BN.CAB.XOKA.GD.ZS',
      desc: 'This indicator reflects the difference between Pakistan’s total exports and imports of goods, services, and transfers, expressed as a percentage of GDP. A negative value means a deficit, while a positive one shows a surplus.'
    },
    {
      title: 'Balance of payments, current US$',
      code: 'BN.BOP.CURR.CD',
      desc: 'This metric shows the net flow of goods, services, and financial transfers in and out of Pakistan, measured in current US dollars. It provides a snapshot of Pakistan’s international financial stability.'
    }
  ]

  return (
    <section className='trade'>
      <div className="img"></div>
      <h2>📦 Trade in Pakistan</h2>
      <article>
        <h3>📦 Why It Matters</h3>
        <p>
          Trade is a key driver of Pakistan’s economy, shaping jobs, income, and
          foreign reserves. Exports bring in valuable foreign exchange, while
          imports meet the demand for goods that the country cannot produce
          locally, such as fuel, machinery, and technology. A balanced trade
          system strengthens economic growth, reduces dependency, and improves
          living standards. By tracking exports, imports, and the trade balance,
          we can better understand Pakistan’s economic health and its position
          in the global market.
        </p>
      </article>
      <article className='indicators'>
        <h3>📊 Key Trade Indicators</h3>
        <div>
          <p>
            To assess Pakistan's trade performance, we focus on several key
            indicators:
          </p>
          <ul>
            {headings.map((h, index) => {
              return (
                <li key={index}>
                  <h4
                    onClick={() => handleHeadingClick(index)}
                    style={{
                      textDecoration: open[index] ? 'underline' : 'none'
                    }}
                  >
                    <span
                      style={{
                        transition: "transform 0.3s ease",
                        transform: open[index]
                          ? 'rotate(90deg)'
                          : 'rotate(0deg)'
                      }}
                    >
                      ►
                    </span>
                    {h.title}
                  </h4>
                  <div>
                    {open[index] && <Details code={h.code} p={h.desc} />}
                  </div>
                </li>
              )
            })}
          </ul>
          <p>
            These metrics provide insights into how much Pakistan trades
            relative to its economy, the value of goods exchanged, and the
            overall trade balance.
          </p>
        </div>
      </article>
      <article>
        <h3>🌐 Pakistan's Trade Partners</h3>
        <p>
          Pakistan's main trade partners include China, the United States, the
          United Arab Emirates, and the European Union. These relationships are
          crucial for both exports and imports, influencing economic stability
          and growth. Understanding these partnerships helps in analyzing trade
          patterns and potential areas for expansion.
        </p>
      </article>

      {/* <div className='heading'>
        • Exports of goods and services (% of GDP) • Imports of goods and
        services (% of GDP) • Merchandise exports (current US$) • Merchandise
        imports (current US$) • Trade (% of GDP) • Current account balance (% of
        GDP) • Balance of payments, current US$ • Frequently Ask Questions (FAQ)
      </div> */}
      {/* section for charts + desc */}
      {/* section for  what is good stage moderate and bad stage*/}
      {/* section for comparision with others + desc */}
    </section>
  )
}

export default Trade
