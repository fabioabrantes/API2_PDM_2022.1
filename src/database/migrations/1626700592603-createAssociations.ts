import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createAssociations1626700592603 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // realizar nos alterações no . criar uma tabela, criar um novo campo, ...
        await queryRunner.createTable(
          new Table({
            name: "associations",
            columns: [
              {
                name: "id",
                type: "integer",
                unsigned: true,// não fica negativo o id
                isPrimary: true,
                isGenerated: true, // é gerado automatico
                generationStrategy: "increment",
              },
              {
                name: "name",
                type: "varchar",
              },
              {
                name: "latitude",
                type: "decimal",
                scale: 10,// números depois da vírgula
                precision: 2,// números antes da vírgula
              },
              {
                name: "longitude",
                type: "decimal",
                scale: 10,
                precision: 2,
              },
              {
                name: "about", // informações sobre o orfanato
                type: "text",
              },
              {
                name: "instructions", // instruções para adoção de animais
                type: "text",
              },
              {
                name: "opening_hours", // 
                type: "varchar",
              },
              {
                name: "open_on_weekends",// se é aberto no final de semana. por default não é
                type: "boolean",
                default: false,
              },
              {
                name:"created_at",
                type: "timestamp",
                default: "now()",
            },
            {
                name:"updated_at",
                type: "timestamp",
                default: "now()",
            },
            ],
          })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // desfazer o que faz no up
        await queryRunner.dropTable("associations");
    }

}
