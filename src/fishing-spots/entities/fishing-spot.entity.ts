import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Season {
  SPRING_SUMMER = 'Весна-Літо',
  WINTER = 'Зима',
  YEAR_ROUND = 'Цілий рік',
}

@Entity()
export class FishingSpot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string; // Назва місця риболовлі

  @Column()
  location: string; // Розташування (координати або регіон)

  @Column()
  type: string; // Тип водойми (річка, озеро, море)

  @Column()
  fishSpecies: string; // Які види риби водяться

  @Column({ default: false })
  isPaid: boolean; // Чи потрібно платити

  @Column({ nullable: true })
  description?: string; // Додаткові деталі

  @Column({ type: 'enum', enum: Season })
  seasonality: Season; // Сезонність, наприклад, "Весна-Літо", "Зима", "Цілий рік"
}
