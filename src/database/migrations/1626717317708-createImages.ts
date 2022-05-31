import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createImages1626717317708 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "images",
              columns: [
                {
                  name: "id",
                  type: "integer",
                  unsigned: true,
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: "increment",
                },
                {
                  name: "path",
                  type: "varchar",
                },
                {
                  name: "association_id", // chave estrangeira
                  type: "integer",
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
              foreignKeys: [
                {
                  name: "FKImageAssociation", // nome da chave estrangeira, caso queria deletar. fica mais facil achar
                  columnNames: ["association_id"], // coluna da chave estrangeira
                  referencedTableName: "associations", // tabela que vai se relacionar
                  referencedColumnNames: ["id"], // coluna da tabela que vai se relacionar
                  onUpdate: "CASCADE",
                  onDelete: "CASCADE",
                },
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("images");
    }

}
