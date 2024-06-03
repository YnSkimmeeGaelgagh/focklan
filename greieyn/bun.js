(function crooDuillag () {
    const claareCloie = trogAyrn({red: "div", ennym: "claare-cloie"});
    document.body.append(claareCloie);
    const dooneyClaareCloie = () => claareCloie.remove();
    function fowFocklynRoie () {
        let ayrnyn = [];
        focklynRoie.forEach(f => {
            const g = trogAyrn({red: "li", cheuSthie: [
                `yn ${f[1].getDate()}${
                    f[1].getDate() == 1
                        || f[1].getDate() == 11
                        || f[1].getDate() == 21
                        || f[1].getDate() == 31 ? "ed" :
                    f[1].getDate() == 2
                        || f[1].getDate() == 12
                        || f[1].getDate() == 22 ? "ah" :
                    f[1].getDate() == 3
                        || f[1].getDate() == 13
                        || f[1].getDate() == 23 ? "ss" :
                    "oo"
                } laa jeh 
                ${
                    f[1].getMonth() == 1 ? "Jerrey Geuree" :
                    f[1].getMonth() == 2 ? "Toshiaght Arree" :
                    f[1].getMonth() == 3 ? "Mayrnt" :
                    f[1].getMonth() == 4 ? "Averil" :
                    f[1].getMonth() == 5 ? "Boaldyn" :
                    f[1].getMonth() == 6 ? "Mean Souree" :
                    f[1].getMonth() == 7 ? "Jerrey Souree" :
                    f[1].getMonth() == 8 ? "Luanistyn" :
                    f[1].getMonth() == 9 ? "Mean Fouyir" :
                    f[1].getMonth() == 10 ? "Jerrey Fouyir" :
                    f[1].getMonth() == 11 ? "Mee Houney" :
                    "Mee ny Nollick"
                },
                ${f[1].getFullYear()}`],
                click: () => {
                    fockle = f[0];
                    claareCloie.remove();
                }
            });
            ayrnyn.push(g);
        });
        return ayrnyn;
    };
    function foshilRoie () {
        claareCloie.textContent = "";
        const gammanynRoie = trogAyrn({red: "div", ennym: "saagh-roie", cheuSthie: [
            trogAyrn({red: "div", ennym: "cheu-sthie-roie", cheuSthie: [
                trogAyrn({red: "div", ennym: "cramman-dooney", cheuSthie:["x"],
                    click: () => {
                        claareCloie.textContent = "";
                        trogClaareCloie();
                    }
                }),
                trogAyrn({red: "div", cheuSthie:["PAST GAMES"]})
            ]}),
            trogAyrn({red: "ul", ennym: "rolley-roie", cheuSthie: fowFocklynRoie()})
        ]});
        claareCloie.append(gammanynRoie);
    };
    function trogClaareCloie () {
        claareCloie.append(
            trogAyrn({red: "div", ennym: "saagh-logo", cheuSthie: [
                trogAyrn({red: "img", ennym: "logo", cheuSthie: ["caslyssyn/logo.webp"]})
            ]}),
            trogAyrn({red: "h2", cheuSthie: ["FOCKLAN"]}),
            trogAyrn({red: "div", ennym: "fys-gamman", cheuSthie: ["Shey caaghyn dy chur çheb er fockle lesh queig letteryn."]}),
            trogAyrn({red: "div", ennym: "cramman-cloie", keint: ["cramman-cloie"], cheuSthie: ["PLAY"], click: dooneyClaareCloie}),
            trogAyrn({red: "div", ennym: "cramman-roie", keint: ["cramman-cloie"], cheuSthie: ["PAST GAMES"], click: foshilRoie})
        )
    };
    trogClaareCloie();
    trogDuillag();
    const crammanCloie = document.getElementById("cramman-cloie");
    const crammanRoie = document.getElementById("cramman-roie");
})();
