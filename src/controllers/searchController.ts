import { Request, Response } from "express";
import { Pet } from "../models/pet";
import { menuObject } from "../helpers/menuObject";

export const search = (req: Request, res: Response) => {
    // pega o campo da pesquisa
    let search: string = req.query.q as string;

    // se não tiver termo para pesquisar, redirecionar para página inicial
    if (!search) {
        res.redirect('/');
        return;
    }

    let list = Pet.getFromName(search);

    res.render('pages/page', {
        menu: menuObject(''),
        list,
        search
    });
}