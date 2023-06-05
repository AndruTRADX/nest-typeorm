// importamos los decoradores para el schema
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

// define que la clase que manejamos es una entidad
@Entity()
export class Product {
  // ID autoincremental generado automáticamente
  @PrimaryGeneratedColumn()
  id: number;

  // Definimos el tipo de dato de esta columna

  // Texto máximo de 255 caracteres y que sea único
  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;

  // Texto de cualquier tamaño
  @Column({ type: 'text' })
  description: string;

  // Número entero
  @Column({ type: 'int' })
  price: number;

  // Número entero
  @Column({ type: 'int' })
  stock: number;

  // Texto
  @Column({ type: 'varchar' })
  image: string;
}
