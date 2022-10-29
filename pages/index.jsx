const Home = () => {
  return (
    <div className="min-h-screen">
      <TopBarPage />

      {/* page */}
      <div className="flex justify-center pt-12">
        {/* Protocol  */}
        <div className="w-[70%] ">
          <CommonContent
            title={"The Launchpad Protocol for Everyone!"}
            sub1={
              "Metarootz helps everyone to create their own tokens and token sales in few seconds."
            }
            sub2={
              " Tokens created on Metarootz will be verified and published on explorer websites."
            }
          />

          {/* buttons  */}
          <div className="flex justify-center gap-4 my-6">
            <Button action={_ => {}} text={"create now"} />
            <Button action={_ => {}} text={"learn more"} />
          </div>

          {/* items  */}
          <div className="flex gap-4 mt-12">
            <ContentCard
              title={"$390.9M"}
              subtitle={"Total Liquidity Raised"}
            />
            <ContentCard title={"13513"} subtitle={"Total Projects"} />
            <ContentCard title={"1.4M"} subtitle={"Total Participants"} />
            <ContentCard title={"$238.4M"} subtitle={"Total Values Locked"} />
          </div>
        </div>

        <div className="w-[70%"></div>
      </div>
    </div>
  );
};

const ContentCard = ({ title, subtitle }) => {
  return (
    <div className="p-6 bg-neutral-800 text-center rounded-lg">
      <img />
      <h4 className="text-4xl font-semibold mb-2">{title}</h4>
      <p className="">{subtitle}</p>
    </div>
  );
};

const Button = ({ styles = "primary", action, text }) => {
  const primary =
    "font-bold py-3 px-4 bg-rose-700 hover:bg-rose-900 text-neutral-300 rounded-full capitalize text-lg";

  return (
    <button
      type="button"
      onClick={action}
      className={styles === "primary" ? primary : secondary}
    >
      {text}
    </button>
  );
};

const TopBarPage = () => {
  return <div className="flex "></div>;
};

const CommonContent = ({ title, sub1, sub2 }) => (
  <div className="text-center">
    <h3 className="text-4xl font-bold mb-3">{title}</h3>
    <p className="text-lg">{sub1}</p>
    <p className="text-lg">{sub2}</p>
  </div>
);

export default Home;
