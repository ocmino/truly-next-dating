import Link from "next/link";



export default function Test() {
  return (
    <div >

      <div className="testPages">
        <p>Jag tycker det känns tryggt att dela mina privata tankar och känslor med min partner. </p>
      </div>

      <div>
          <button className="testButtonLayout">1</button>
          <button className="testButtonLayout">2</button>
          <button className="testButtonLayout">3</button>
          <button className="testButtonLayout">4</button>
          <button className="testButtonLayout">5</button>
          <button className="testButtonLayout">6</button>
          <button className="testButtonLayout">7</button>
      </div>
    
      <div>
      <p><button><p>
          <Link href="/test">
            <a>Fortsätt</a>
          </Link>
        </p></button></p>
      </div>

      <p>
          <Link href="/welcome">
            <a className="backToFirstPage">←</a>
          </Link>
        </p>
    </div>
  );
}
