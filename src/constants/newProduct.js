import flatBed1 from "../assets/flatBed1.png";
import flatBed2 from "../assets/flatBed2.png";
import Rotary1 from "../assets/Rotary1.png";
import Rotary2 from "../assets/Rotary2.png";
import TextileHex1 from "../assets/TextileHex1.png";
import DigitalHex from "../assets/DigitalHex.png";
import ScreenMaking1 from "../assets/ScreenMaking1.png";
import ScreenMaking2 from "../assets/ScreenMaking2.png";
import TextilePrintingMachines from "../assets/TextilePrintingMachines.png";

export const products = {
  result: "true",
  data: [
    {
      category: "Flat Bed Screen Printing Chemicals",
      product: [
        {
          name: "Photo Screen Emulsion",
          description: "",
          image: flatBed1,
          subCategory: [
            {
              name: "Bichromate Emulsion",
              items: ["Ezycoat 585", "Ezycoat 999 Plus", "Ezycoat 999 Star"],
            },
            {
              name: "Diazo Emulsion",
              items: ["Ezycoat 333", "Ezycoat 090"],
            },
            {
              name: "Dual Cure Emulsion",
              items: ["Ezycoat HD9"],
            },
          ],
        },
        {
          name: "",
          description: "",
          image: flatBed2,
          subCategory: [
            {
              name: "Screen Block Emulsion",
              items: ["Ezycoat 216"],
            },
            {
              name: "Screen Hardener",
              items: [
                "Ezycoat 720N",
                "Ezycoat 108H",
                "Ezycoat 1 Plus Hardener",
              ],
            },
            {
              name: "Thermoplastic Blanket Adhesive",
              items: ["Bluetex LT", "Bluetex MT", "Bluetex HT", "Bluetex RC9"],
            },
            {
              name: "Leveling Agent",
              items: ["Bluetex Basecoat"],
            },
          ],
        },
      ],
    },
    {
      category: "Rotary Screen Printing Chemicals",
      product: [
        {
          name: "",
          description: "",
          image: Rotary1,
          subCategory: [
            {
              name: "Photo Screen Emulsion",
              items: [
                "Ezycoat 414",
                "Ezycoat 414 Plus",
                "Ezycoat 4500 DL",
                "Rotary Emulsion 747",
              ],
            },
            {
              name: "Screen Hardener",
              items: ["Ezycoat PS9"],
            },
          ],
        },
        {
          description: "",
          image: Rotary2,
          subCategory: [
            {
              name: "Thermoplastic Blanket Adhesive",
              items: ["Rotostar HT", "Rotostar MT"],
            },
            {
              name: "Auxiliary Rotary Chemicals",
              items: [
                "Ezycoat Degreaser",
                "Ezycoat Endring Remover",
                "Ezycoat Stripper",
                "Chromic Acid",
                "Fluffix",
                "Araldite (Resin & Hardener)",
              ],
            },
          ],
        },
      ],
    },
    {
      category: "Screen Making Auxillaries",
      product: [
        {
          name: "Bolting Cloth",
          description: "",
          image: ScreenMaking1,
          subCategory: [
            {
              name: "Mono Polyester Mesh",
              items: [
                "Normal (Loom)",
                "Sulzer Made",
                "Water Jet",
                "Heat Set",
                "Export Quality",
              ],
            },
            {
              name: "Multi Polyester Mesh",
              items: ["Normal (Loom)", "Sulzer Made", "Heat Set"],
            },
            {
              name: "Nylon Mesh",
              items: ["Normal (Loom)", "Sulzer Made"],
            },
            {
              name: "Imported Mesh",
              items: ["Imported Mesh (Yellow)"],
            },
          ],
        },
        {
          name: "",
          description: "",
          image: ScreenMaking2,
          subCategory: [
            {
              name: "Rotary Nickel Screens",
              items: [],
            },
            {
              name: "Frame Adhesive",
              items: [
                "Ezycoat 828 (Metal Frame)",
                "Ezycoat FA99 (Aluminium Frame)",
                "Arkabond 930",
              ],
            },
            {
              name: "Auxiliary Chemicals",
              items: [
                "Stoving Thinner",
                "Acetone",
                "Ammonium Dichromate (Merck)",
                "USL Auto Clear",
                "Ethyl Acetate",
                "Cyclo",
              ],
            },
            {
              name: "Auxiliary Items",
              items: [
                "Pre-stretched Frame",
                "Wooden/Steel Stopper",
                "ALPPP",
                "Frame Fittings",
              ],
            },
          ],
        },
      ],
    },
    {
      category: "Digital Printing Chemicals",
      product: [
        {
          name: "Digital Printing Chemicals",
          description: "",
          image: DigitalHex,
          subCategory: [
            {
              name: "",
              items: [
                "Sodium Alginate",
                "Rotostar MT/HT",
                "Ager Cloth",
                "Decoating Thinner",
                "Resist Salt",
                "Dye Fixer",
              ],
            },
            {
              name: "",
              items: [
                "Guar Gum",
                "Toluene",
                "Non-ionic",
                "Sodium Bi-Carbonate",
                "Soda Ash",
                "Ethyl Acetate",
              ],
            },
          ],
        },
      ],
    },
    {
      category: "Textile Auxiliaries",
      product: [
        {
          name: "",
          description: "",
          image: TextileHex1,
          subCategory: [
            {
              name: "",
              items: [
                "Pigment Pastes",
                "Table Gum",
                "Stretch Khadi",
                "Gold Binder",
                "Printing Guar Gum",
              ],
            },
            {
              name: "",
              items: [
                "Pallet Paper",
                "Yellow Tape",
                "Polyvinyl Alcohol (PVA)",
                "Waterproof Cotton Tape",
                "EMF & Inkjet Film rolls",
                "Flat Bed & Rotary Machine Spare Parts",
              ],
            },
          ],
        },
      ],
    },
    {
      category: "Textile Printing Machines",
      product: [
        {
          name: "",
          description: "",
          image: TextilePrintingMachines,
          subCategory: [
            {
              name: "",
              items: [
                "Laser Stripping Machine",
                "Curing Oven",
                "Rotary Screen Coating",
                "Rotary Screen Exposing Machine",
              ],
            },
          ],
        },
      ],
    },
  ],
};
