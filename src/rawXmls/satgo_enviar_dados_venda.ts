import { IRawXmlProvider } from "./IRawXmlProvider";

export default class SatGoXmlEnviarDadosVenda implements IRawXmlProvider{
    xml: string;
    constructor(){
        this.xml = 
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'+
        '<CFe>'+
        '<infCFe versaoDadosEnt="00.07">'+
            '<ide>'+
                '<CNPJ>16716114000172</CNPJ>'+
                '<signAC>SGR-SAT SISTEMA DE GESTAO E RETAGUARDA DO SAT</signAC>'+
                '<numeroCaixa>001</numeroCaixa>'+
            '</ide>'+
            '<emit>'+
                '<CNPJ>27101611000182</CNPJ>'+
                '<IE>111111111111</IE>'+
                '<indRatISSQN>S</indRatISSQN>'+
            '</emit>'+
            '<dest/>'+
            '<det nItem="1">'+
                '<prod>'+
                   '<cProd>116</cProd>'+
                    '<cEAN>9990000001163</cEAN>'+
                    '<xProd>Refrigerante</xProd>'+
                    '<CFOP>5405</CFOP>'+
                    '<uCom>UN</uCom>'+
                    '<qCom>1.0000</qCom>'+
                    '<vUnCom>4.00</vUnCom>'+
                    '<indRegra>A</indRegra>'+
                '</prod>'+
                '<imposto>'+
                    '<ICMS>'+
                    '<ICMSSN102>'+
                        '<Orig>0</Orig>'+
                        '<CSOSN>500</CSOSN>'+
                    '</ICMSSN102>'+
                    '</ICMS>'+
                    '<PIS>'+
                    '<PISSN>'+
                        '<CST>49</CST>'+
                    '</PISSN>'+
                    '</PIS>'+
                    '<COFINS>'+
                    '<COFINSSN>'+
                        '<CST>49</CST>'+
                    '</COFINSSN>'+
                    '</COFINS>'+
                '</imposto>'+
            '</det>'+
            '<total/>'+
            '<pgto>'+
                '<MP>'+
                    '<cMP>01</cMP>'+
                    '<vMP>4.00</vMP>'+
                '</MP>'+
            '</pgto>'+
        '</infCFe>'+
        '</CFe>'
        
    }


    getXml(){
        return this.xml;
    }
}